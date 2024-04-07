import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient, private router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.decodeUserData();
    }
  }
  decodeUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData.next(decodedToken);
  }
  register(userData: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }
  login(userData: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    );
  }
  logOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('Name');
    localStorage.removeItem('Email');
    this.userData.next(null);
    // this.router.navigate(['/dashboard/users']);
  }
}
