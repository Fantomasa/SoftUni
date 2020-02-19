import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { UserInfo } from './shared/userinfo';
import { ToastrServiceExport } from '../toastr/toastr.service';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private dbPath = '/users';

  currentUserRef: AngularFireList<UserInfo> = null;

  constructor(
    public db: AngularFireDatabase,
    public toastr: ToastrServiceExport
  ) {
    this.currentUserRef = db.list(this.dbPath);
  }

  // getUserDetail(id: string): AngularFireObject<UserInfo>{
  //    //return this.db.object<User>(this.dbPath + '/' + '-M0OZLBE4Ws2tNKxSeJ6').valueChanges().subscribe();
  // }

  // getCurrentUserInfo(key: string): AngularFireObject<UserInfo> {
  //   return this.currentUserRef.
  // }

  createUserInfo(userinfo: UserInfo): void {
    this.currentUserRef.push(userinfo);
  }

  updateUserInfo(key: string, value: any): Promise<void>{
    return this.currentUserRef.update(key, value);
  }

  deleteUserInfo(key: string): Promise<void>{
    return this.currentUserRef.remove(key);
  }

  getCurrentUsersInfo(): AngularFireList<UserInfo>{
    return this.currentUserRef;
  }

  deleteAllUsersInfo(): Promise<void>{
    return this.currentUserRef.remove();
  }
}
