import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { UserInfo } from './shared/userinfo';
import { ToastrServiceExport } from '../toastr/toastr.service';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private dbPath = '/users-info';

  currentUserRef: AngularFireList<UserInfo> = null;
  currentUser: UserInfo;

  constructor(
    public db: AngularFireDatabase,
    public toastr: ToastrServiceExport
  ) {
    this.currentUserRef = db.list(this.dbPath);
    if (this.currentUser == undefined) {
      this.currentUser = new UserInfo('', '', '', '', '');
    }
  }

  getUserInfo(userId: string) {
    return this.db.object(this.dbPath + '/' + userId).snapshotChanges();
  }

  createUserInfo(userinfo: UserInfo) {
    return this.currentUserRef.push(userinfo);
  }

  updateUserInfo(key: string, value: UserInfo): Promise<void> {
    return this.currentUserRef.update(key, value);
  }

  deleteUserInfo(key: string): Promise<void> {
    return this.currentUserRef.remove(key);
  }

  getCurrentUsersInfo(): AngularFireList<UserInfo> {
    return this.currentUserRef;
  }

  deleteAllUsersInfo(): Promise<void> {
    return this.currentUserRef.remove();
  }
}
