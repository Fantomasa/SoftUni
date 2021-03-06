import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrServiceExport } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  logoutHandler() {
    this.authService.logout();
  }
}
