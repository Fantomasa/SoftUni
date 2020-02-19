import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../upload/shared/userinfo';
import { User } from 'firebase';
import { AuthService } from '../auth/auth.service';
import { UploadService } from '../upload/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  @Input() currentUser: UserInfo;

  constructor(
    private authService: AuthService,
    private uploadService: UploadService
  ) {
    this.user = authService.user;
    this.currentUser = this.uploadService.currentUser;

    if (this.uploadService.currentUser.key != '') {
      this.uploadService.getUserInfo(this.currentUser.key);
    }
  }

  ngOnInit(): void {    
  }

  updateActive(isActive: boolean) {
  }

  updateInfoHandler({ name, ltName, phone, city }) {
    if (this.uploadService.currentUser?.key != '') {
      this.uploadService.currentUser.city = city;
      this.uploadService.currentUser.name = name;
      this.uploadService.currentUser.lastname = ltName;
      this.uploadService.currentUser.phone = phone;

      this.uploadService.updateUserInfo(this.currentUser.key, this.currentUser);
    } else {
      this.uploadService.currentUser.city = city;
      this.uploadService.currentUser.name = name;
      this.uploadService.currentUser.lastname = ltName;
      this.uploadService.currentUser.phone = phone;

      let result = this.uploadService.createUserInfo(this.currentUser)
      this.uploadService.currentUser.key = result.key;
    }

    localStorage.setItem('currentUser', JSON.stringify(this.uploadService.currentUser));
  }
}
