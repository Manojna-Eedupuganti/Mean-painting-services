import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Painting-Services';
  
    
  }



  // ngOnInit:void(){
  //   this.userservice.getUserLoginStatus().subscribe({
  //     next:(userLoginStatus)=>{this.status=userLoginStatus}
  //   });
  // }

