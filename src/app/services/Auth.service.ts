import { Injectable } from '@angular/core';
import { UsersService } from './Users.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User | null = null;
  private isAuthenticated = false;
  authSecretKey: any = 'Bearer Token';
  userName: any = 'Name';
  userLastName: any = 'Last Name';
  userEmail: any = 'Email';

  constructor(
    private usersService: UsersService,
    private toast: HotToastService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    this.usersService
      .checkCreds(email, password)
      .then(({ userData, error }) => {
        if (error) console.log(error);
        if (userData) {
          this.currentUser = userData;
          if (userData.isAdmin) {
            this.isAuthenticated = true;
            localStorage.setItem(this.authSecretKey, userData.id);
            localStorage.setItem(this.userName, userData.firstName);
            localStorage.setItem(this.userLastName, userData.lastName);
            localStorage.setItem(this.userEmail, userData.email);
            this.toast.success('Successfully Logged In!');
            this.router.navigate(['/dashboard/home']);
          } else {
            this.toast.warning('This user does not have admin privileges.');
          }
        } else {
          this.toast.error('Invalid credentials');
        }
      });
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    localStorage.removeItem(this.userName);
    localStorage.removeItem(this.userLastName);
    localStorage.removeItem(this.userEmail);
    this.toast.success('Successfully logged out');
  }
}
