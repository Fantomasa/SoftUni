import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastrServiceExport } from 'src/app/toastr/toastr.service';

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
    this.authService.login(email, password);
    this.router.navigate(['gallery']);
    this.toastr.showSuccess('Successfull loggedIn', '');
  }
}
