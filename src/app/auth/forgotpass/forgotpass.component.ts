import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrServiceExport } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrServiceExport 
  ) { }

  ngOnInit() {
  }
  
  forgotPassHandler({email}){
    let result = this.authService.sendPasswordResetEmail(email);

    result.then(() => {
      this.toastr.showSuccess("Email for reset password is send!", "Please check your spam!");
      this.router.navigate(['']);
    }).catch(error => {
      this.toastr.showError(error.message, "");      
    });
  }

}
