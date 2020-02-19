import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../upload/shared/userinfo';
import { User } from 'firebase';
import { AuthService } from '../auth/auth.service';
import { UploadService } from '../upload/upload.service';
import { clearScreenDown } from 'readline';

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
    this.currentUser = new UserInfo(this.user.email, '', '', '', '');     
  }

  ngOnInit(): void {

  }

  updateInfoHandler({ name, ltName, phone, city }) {
    this.currentUser.city = city;
    this.currentUser.name = name;
    this.currentUser.lastname = ltName;
    this.currentUser.phone = phone;

    this.uploadService.createUserInfo(this.currentUser);
  }
}
