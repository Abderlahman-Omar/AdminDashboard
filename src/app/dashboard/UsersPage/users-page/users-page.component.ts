import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { UsersService } from '../../../services/Users.service';
import { User } from '../../../Interfaces/User';

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
  // userList: User[] = [];
  // userId: any;
  // userData!: User;
  // constructor(private usersService: UsersService, private router: Router) {}
  // ngOnInit(): void {
  //   this.allUsers();
  // }

  // async allUsers() {
  //   const { usersData, error } = await this.usersService.getAllUsers();
  //   if (usersData) {
  //     this.userList = usersData;
  //     console.log(usersData);
  //   }
  // }
  // async getOneUser(id: any) {
  //   await this.usersService.getSingleUser(id);
  //   if (id) {
  //     this.userId = id;
  //     console.log(this.userId);
  //   }
  // }
  // async add(newUser: User) {
  //   await this.usersService.addNewUser(newUser);
  //   if (newUser) {
  //     this.userData = newUser;
  //     console.log(this.userData);
  //     if (this.userData.isAdmin == true) {
  //     }
  //   }
  // }
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
  //   ]),
  // });
  // async handleLogin(loginForm: FormGroup) {
  //   if (loginForm.valid) {
  //     //register
  //     this.usersService.getAllUsers()
  //         // console.log(response);

  //         // if (response.message === 'success') {
  //         //   localStorage.setItem('userToken', response.token);
  //         //   localStorage.setItem('Name', response.user.name);
  //         //   localStorage.setItem('Email', response.user.email);
  //         //   this.authService.decodeUserData();
  //         //   //navigate login
  //         //   this.isLoading = false;
  //         //   this.router.navigate(['/dashboard/home']);
  //         // }

  //   }
  // }
}
