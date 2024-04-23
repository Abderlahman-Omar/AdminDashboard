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
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      zipCode: new FormControl(),
      deliveryNotes: new FormControl(''),
    }),
    paymentMethod: new FormGroup({
      ccNumber: new FormControl(''),
      ccType: new FormControl(''),
    }),
    isAdmin: new FormControl(false),
    isSeller: new FormControl(false),
  });
  usersList: User[] = [];
  currentUser: User = {} as User;
  selectedUId: string | null = null;
  isLoadingPage: boolean = false;

  constructor(private myService: UsersService) {}

  ngOnInit(): void {
    this.updateLocalData();
  }

  async updateLocalData() {
    const { usersData, error } = await this.myService.getAllUsers();
    if (usersData) {
      this.usersList = usersData;
      this.onClear();
    }
  }

  onClear() {
    this.selectedUId = null;
    this.isLoadingPage = false;
    this.userForm.reset();
    this.userForm.disable();
  }

  setCurrentUId(id: string) {
    this.selectedUId = id;
  }

  onInitUserUpdate() {
    if (this.selectedUId !== null) {
      this.myService
        .getSingleUser(this.selectedUId)
        .then(({ userData, error }) => {
          if (error) console.log(error);
          if (userData) this.currentUser = userData;
          // console.log(userData);
          this.userForm.setValue({
            firstName: this.currentUser.firstName,
            lastName: this.currentUser.lastName,
            email: this.currentUser.email,
            password: this.currentUser.password,
            phoneNumber: this.currentUser.phoneNumber,
            address: {
              street: this.currentUser.address[0]
                ? this.currentUser.address[0].street
                : '',
              city: this.currentUser.address[0]
                ? this.currentUser.address[0].city
                : '',
              state: this.currentUser.address[0]
                ? this.currentUser.address[0].state
                : '',
              country: this.currentUser.address[0]
                ? this.currentUser.address[0].country
                : '',
              zipCode: this.currentUser.address[0]
                ? this.currentUser.address[0].zipCode
                : null,
              deliveryNotes: this.currentUser.address[0]
                ? this.currentUser.address[0].deliveryNotes
                : '',
            },
            paymentMethod: {
              ccNumber: this.currentUser.paymentMethod[0]
                ? this.currentUser.paymentMethod[0].ccNumber
                : '',
              ccType: this.currentUser.paymentMethod[0]
                ? this.currentUser.paymentMethod[0].ccType
                : '',
            },
            isAdmin: this.currentUser.isAdmin,
            isSeller: this.currentUser.isSeller,
          });
          this.userForm.enable();
        });
    } else {
      this.onClear();
    }
  }

  onSubmit() {
    // console.log(this.currentUser);
    if (this.currentUser != null) {
      this.currentUser = {
        id: this.selectedUId!,
        firstName: this.userForm.controls.firstName!.dirty
          ? this.userForm.value.firstName!
          : this.currentUser!.firstName,
        lastName: this.userForm.controls.lastName!.dirty
          ? this.userForm.value.lastName!
          : this.currentUser!.lastName,
        email: this.userForm.controls.email!.dirty
          ? this.userForm.value.email!
          : this.currentUser!.email,
        password: this.userForm.controls.password!.dirty
          ? this.userForm.value.password!
          : this.currentUser!.password,
        phoneNumber: this.userForm.controls.phoneNumber!.dirty
          ? this.userForm.value.phoneNumber!
          : this.currentUser!.phoneNumber,
        isAdmin: this.userForm.controls.isAdmin!.dirty
          ? this.userForm.value.isAdmin!
          : this.currentUser!.isAdmin,
        isSeller: this.userForm.controls.isSeller!.dirty
          ? this.userForm.value.isSeller!
          : this.currentUser!.isSeller,
        address: this.currentUser!.address,
        avatar: this.currentUser!.avatar,
        paymentMethod: this.currentUser!.paymentMethod,
        userListsIds: this.currentUser!.userListsIds,
        cart: this.currentUser!.cart,
      };
      // console.log(this.currentUser);
    }
    this.myService
      .updateUser(this.currentUser)
      .then(({ updatedData, error }) => {
        if (error) console.log(error);
        this.updateLocalData();
        this.onClear();
      });
  }

  onDeleteUser() {
    if (this.selectedUId !== null) {
      if (confirm('Are you sure?')) {
        this.myService
          .deleteUser(this.selectedUId)
          .then(({ deletedData, error }) => {
            if (error) console.log(error);
            this.updateLocalData();
            this.onClear();
          });
      }
    }
  }
}
// export class UsersPageComponent implements OnInit {
//   // constructor(private router: Router) {}
//   // ngOnInit(): void {}
//   // loginForm: FormGroup = new FormGroup({
//   //   email: new FormControl(null, [Validators.required, Validators.email]),
//   //   password: new FormControl(null, [
//   //     Validators.required,
//   //     Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
//   //   ]),
//   // });
//   // handleLogin(loginForm: FormGroup) {
//   //   if (loginForm.valid) {
//   //     this.router.navigate(['/dashboard/home']);
//   //   } else {
//   //     alert('Not Valid');
//   //   }
//   // }
//   constructor(
//     private authService: AuthenticationService,
//     private router: Router
//   ) {}
//   ngOnInit(): void {}
//   isLoading: boolean = false;
//   apiError: string = '';

//   loginForm: FormGroup = new FormGroup({
//     email: new FormControl(null, [Validators.required, Validators.email]),
//     password: new FormControl(null, [
//       Validators.required,
//       Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
//     ]),
//   });
//   handleLogin(loginForm: FormGroup) {
//     this.isLoading = true;
//     if (loginForm.valid) {
//       //register
//       this.authService.login(loginForm.value).subscribe({
//         next: (response) => {
//           // console.log(response);

//           if (response.message === 'success') {
//             localStorage.setItem('userToken', response.token);
//             localStorage.setItem('Name', response.user.name);
//             localStorage.setItem('Email', response.user.email);
//             this.authService.decodeUserData();
//             //navigate login
//             this.isLoading = false;
//             this.router.navigate(['/dashboard/home']);
//           }
//         },
//         error: (err) => {
//           this.isLoading = false;
//           this.apiError = err.error.message;
//         },
//       });
//     }
//   }
//   // userList: User[] = [];
//   // userId: any;
//   // userData!: User;
//   // constructor(private usersService: UsersService, private router: Router) {}
//   // ngOnInit(): void {
//   //   this.allUsers();
//   // }

//   // async allUsers() {
//   //   const { usersData, error } = await this.usersService.getAllUsers();
//   //   if (usersData) {
//   //     this.userList = usersData;
//   //     console.log(usersData);
//   //   }
//   // }
//   // async getOneUser(id: any) {
//   //   await this.usersService.getSingleUser(id);
//   //   if (id) {
//   //     this.userId = id;
//   //     console.log(this.userId);
//   //   }
//   // }
//   // async add(newUser: User) {
//   //   await this.usersService.addNewUser(newUser);
//   //   if (newUser) {
//   //     this.userData = newUser;
//   //     console.log(this.userData);
//   //     if (this.userData.isAdmin == true) {
//   //     }
//   //   }
//   // }
//   // loginForm: FormGroup = new FormGroup({
//   //   email: new FormControl(null, [Validators.required, Validators.email]),
//   //   password: new FormControl(null, [
//   //     Validators.required,
//   //     Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
//   //   ]),
//   // });
//   // async handleLogin(loginForm: FormGroup) {
//   //   if (loginForm.valid) {
//   //     //register
//   //     this.usersService.getAllUsers()
//   //         // console.log(response);

//   //         // if (response.message === 'success') {
//   //         //   localStorage.setItem('userToken', response.token);
//   //         //   localStorage.setItem('Name', response.user.name);
//   //         //   localStorage.setItem('Email', response.user.email);
//   //         //   this.authService.decodeUserData();
//   //         //   //navigate login
//   //         //   this.isLoading = false;
//   //         //   this.router.navigate(['/dashboard/home']);
//   //         // }

//   //   }
//   // }
// }
