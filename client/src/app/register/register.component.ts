import { Component, inject } from '@angular/core';
import { Validators,FormControl,FormGroup} from '@angular/forms'
import { UserService } from '../services/user.service';
import { User } from '../model/users';
import { Router } from '@angular/router';
import {NgToastService} from'ng-angular-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user=new FormGroup({
  username:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  password:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  dob:new FormControl('',[Validators.required]),
});
 
userService=inject(UserService)
router=inject(Router)
toast=inject(NgToastService)
duplicateUserStatus:boolean=false;

  get username() {
    return this.user.get('username')
  }
 
  get password() {
    return this.user.get('password')
  }
 
  get email() {
    return this.user.get('email')
  }
 
  get dob() {
    return this.user.get('dob')
  }
 
  

onSubmitUser(){
  let {username,password,email,dob}=this.user.value;
  let newUser=new User(username,password,email,dob);
  this.userService.createUser(newUser).subscribe({
    next:(res)=>{
      console.log(res)
      //navigate to login
      if(this.user.valid){
        this.router.navigate(['/login'])
      }
      this.toast.success({
        detail:'Register done',
        summary:'User registration is successfully completed.',
        position:'topCenter',
        duration:3000
        })
      
    },
    error:(err)=>{
      console.log("error in user creation")
    }
  
})
}
 
}
