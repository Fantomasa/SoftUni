import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { InfoComponent } from './info/info.component';
import { ToastrModuleExport } from '../toastr/toastr.module';

var config = {
  apiKey: "AIzaSyBZzjG-8VTEk3zvf1ZIKKvXgQJSy2O7WZk",
  authDomain: "roraweb.firebaseapp.com",
  databaseURL: "https://roraweb.firebaseio.com",
  projectId: "roraweb",
  storageBucket: "roraweb.appspot.com",
  messagingSenderId: "585128718851",
  appId: "1:585128718851:web:9aff2486fda313335b1436",
  measurementId: "G-40ZDC7E6FZ"
};

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotpassComponent, InfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ToastrModuleExport
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    InfoComponent
  ]
})
export class AuthModule { }
