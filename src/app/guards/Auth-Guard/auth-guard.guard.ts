import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateChildFn = (route, state) => {
  // let router = inject(Router);
  // if (localStorage.getItem('userToken') !== null) {
  //   return true;
  // } else {
  //   router.navigate(['/dashboard/users']);
  //   return false;
  // }
  let router = inject(Router);
  if (localStorage.getItem('Bearer Token') !== null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
