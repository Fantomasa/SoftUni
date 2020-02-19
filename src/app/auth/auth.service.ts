import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { UserInfo } from '../upload/shared/userinfo';
import { ToastrServiceExport } from '../toastr/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth, 
    public router: Router,
    private toastr: ToastrServiceExport
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    return result;
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    
    this.sendEmailVerification();

    return result;
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.toastr.showSuccess("Successfully logged out!", "");
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  saveUserEmailInStorage(email: string) {
    let userInfo = new UserInfo(email, '', '', '', '');
    localStorage.setItem('currentUser', JSON.stringify(userInfo));
  }
}
