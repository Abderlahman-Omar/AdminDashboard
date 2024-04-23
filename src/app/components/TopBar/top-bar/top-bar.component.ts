import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/Auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent implements OnInit, OnChanges {
  constructor(private authService: AuthService, private router: Router) {}
  adminName: any;
  adminLastName: any;
  adminMail: any;
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.adminName = localStorage.getItem('Name');
    this.adminLastName = localStorage.getItem('Last Name');
    this.adminMail = localStorage.getItem('Email');
  }
  signOut() {
    this.authService.logout();
  }
  // constructor(
  //   private authService: AuthenticationService,
  //   private router: Router
  // ) {}
  // adminName: any;
  // adminLastName: any;
  // adminMail: any;
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   this.adminName = localStorage.getItem('Name');
  //   this.adminLastName = localStorage.getItem('Last Name');
  //   this.adminMail = localStorage.getItem('Email');
  // }
  // signOut() {
  //   this.authService.logOut();
  // }
}
