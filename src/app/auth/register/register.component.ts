import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrServiceExport } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrServiceExport
  ) { }

  ngOnInit() {
  }

  registerHandler({ email, password, rePassword }) {
    if (password != rePassword) {
      this.toastr.showError("Passwords must match !", "");
      return;
    }

    let result = this.authService.register(email, password);
    result
      .then(() => {
        this.authService.saveUserEmailInStorage(email);
        this.toastr.showSuccess("Successfully registered!", "Verification message is send!")
        this.router.navigate(['gallery']);
      })
      .catch(error => this.toastr.showError(error.message, ''));
  }
}
