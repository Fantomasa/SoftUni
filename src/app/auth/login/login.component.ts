import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrServiceExport } from 'src/app/toastr/toastr.service';
import { UserInfo } from 'src/app/upload/shared/userinfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrServiceExport
  ) { }

  ngOnInit() {
  }

  loginHandler({ email, password }) {
    let result = this.authService.login(email, password);
    result
      .then(() => {
        this.authService.saveUserEmailInStorage(email);
        this.router.navigate(['gallery']);
        this.toastr.showSuccess('Successfully logged In!', '');
      })
      .catch(error => this.toastr.showError(error.message, ''));
  }
}
