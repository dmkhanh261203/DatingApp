import { ToastrService} from 'ngx-toastr';
import {  inject } from '@angular/core';
import { AccountService } from './../_services/account.service';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
const accountService = inject(AccountService);
const toastrService = inject(ToastrService);

  return accountService.currentUser$.pipe(
  map(user =>{
    if(user) return true;
    else{
      toastrService.error('you shall not pass!');
      return false;
    }
  })
  )
};
