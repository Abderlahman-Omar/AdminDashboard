import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (localStorage.getItem('userToken') !== null) {
    return true;
  } else {
    router.navigate(['/dashboard/users']);
    return false;
  }
};
