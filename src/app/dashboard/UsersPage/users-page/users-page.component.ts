import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent implements OnInit {
  // constructor(private router: Router) {}
  // ngOnInit(): void {}
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
  //   ]),
  // });
  // handleLogin(loginForm: FormGroup) {
  //   if (loginForm.valid) {
  //     this.router.navigate(['/dashboard/home']);
  //   } else {
  //     alert('Not Valid');
  //   }
  // }
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  isLoading: boolean = false;
  apiError: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });
  handleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      //register
      this.authService.login(loginForm.value).subscribe({
        next: (response) => {
          // console.log(response);

          if (response.message === 'success') {
            localStorage.setItem('userToken', response.token);
            localStorage.setItem('Name', response.user.name);
            localStorage.setItem('Email', response.user.email);
            this.authService.decodeUserData();
            //navigate login
            this.isLoading = false;
            this.router.navigate(['/dashboard/home']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
        },
      });
    }
  }
}
