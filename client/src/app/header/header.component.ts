import { Component, inject } from '@angular/core';
import {UserService} from '../services/user.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userservice=inject(UserService)

  status:boolean;
  ngOnInit(): void {
    this.userservice.getUserLoginStatus().subscribe({
          next:(userLoginStatus)=>{this.status=userLoginStatus}
        });
    
  }

}
