import { Observable, of } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component } from '@angular/core';
import { User } from '../_models/user';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
model: any = {};

constructor(public AccountService: AccountService, private router: Router, private toastr: ToastrService) {}

ngOnInit(): void{
  
}


login(){
  this.AccountService.login(this.model).subscribe({
    next: _ => this.router.navigateByUrl('/members'),
  
    error: error => this.toastr.error(error.error)
  })
}

logout() {
  this.AccountService.logout();
  this.router.navigateByUrl('/');
}
}
