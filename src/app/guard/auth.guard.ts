import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route,state) => {
  const router = inject(Router);
  let isLoggedInUser = sessionStorage.getItem('isLoggedInUser');
  // debugger;
  //  if (typeof sessionStorage !== 'undefined') {
  if(isLoggedInUser !=null){
      return true;
  }else{
   router.navigateByUrl('/login');
   return false;
  }

    };
  
