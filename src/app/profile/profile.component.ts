import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../upload/shared/userinfo';
import { UploadService } from '../upload/upload.service';
import { ToastrServiceExport } from '../toastr/toastr.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() currentUser: UserInfo;

  constructor(
    private uploadService: UploadService,
    private toastr: ToastrServiceExport
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean) {
  }

  updateInfoHandler({ name, ltName, phone, city }) {
    if (name == '' || ltName == '' || phone == '' || city == '') {
      this.toastr.showError("Please field all fields..", "");
      return;
    }

    if (this.uploadService.currentUser?.key != '') {
      this.uploadService.currentUser.city = city;
      this.uploadService.currentUser.name = name;
      this.uploadService.currentUser.lastname = ltName;
      this.uploadService.currentUser.phone = phone;

      this.uploadService.updateUserInfo(this.currentUser.key, this.uploadService.currentUser);
    } else {
      this.uploadService.currentUser.city = city;
      this.uploadService.currentUser.name = name;
      this.uploadService.currentUser.lastname = ltName;
      this.uploadService.currentUser.phone = phone;

      let result = this.uploadService.createUserInfo(this.uploadService.currentUser)
      this.uploadService.currentUser.key = result.key;
    }

    localStorage.setItem('currentUser', JSON.stringify(this.uploadService.currentUser));
    this.toastr.showSuccess("Your info is updated!", "");
  }
}
