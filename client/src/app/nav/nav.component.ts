import { Observable, of } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
model: any = {};

constructor(public AccountService: AccountService) {}

ngOnInit(): void{
  
}


login(){
  this.AccountService.login(this.model).subscribe({
    next: response =>  {
      console.log(response);
    },
    error: error => console.log(error)
  })
}

logout() {
  this.AccountService.logout();
}
}