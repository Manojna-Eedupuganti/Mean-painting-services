import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators,} from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
   router=inject(Router)
  userCredentialsError= { userCredErrStatus:false, userCredErrMsg: "" };
  // getters and setters
  get username() {
    return this.loginForm.get('username')
  }
 
  get password() {
    return this.loginForm.get('password')
  }
 
 
  userService=inject(UserService);

 
  onSubmitUser(){
    this.userService.userlogin(this.loginForm.value).subscribe({
      next:(res)=>{if(res.message==="login success"){
      //store token in local/session storage
      localStorage.setItem("token", res.token);
      //set user status & current user to service
      this.userService.setuserLoginStatus(true)
      this.userService.setCurrentUser(res.user)
      //sessionStorage.setItem('token',res.token)
      //navigate to aboutus
      this.router.navigate(['/aboutus']);
    } else {
      this.userCredentialsError = {
        userCredErrStatus: true,
        userCredErrMsg: res.message
      };
    }
  },
  error: (error) => {
    console.log("err in user login", error);
  },
});
}
}