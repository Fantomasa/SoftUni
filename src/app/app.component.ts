import { Component } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(
    //public db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get IsLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
