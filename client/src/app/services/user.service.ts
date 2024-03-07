import { Injectable,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/users';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../model/formdata';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
 httpClient=inject(HttpClient)
 userLoginStatus=new BehaviorSubject<boolean>(false)
 currentUser=new BehaviorSubject<User>({
  username:'',
  password:'',
  email:'',
  dob:''
 })
 
 setuserLoginStatus(value:boolean){
   this.userLoginStatus.next(value)
 }
 setCurrentUser(user:User){
  this.currentUser.next(user);
}

 getUserLoginStatus(){
   return  this.userLoginStatus.asObservable()
 }
 getCurrentUser(){
  return this.currentUser.asObservable;
}
 
//create user(user registration)
 createUser(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:4000/user-api/users',newUser)
 }
 
 //user login 
 userlogin(usercredobj):Observable<any>{
  return this.httpClient.post('http://localhost:4000/user-api/login',usercredobj) 
 }

  //user logout
  userLogout(){
    //reset current user
    this.setuserLoginStatus(false)
    //reset login status
    this.setCurrentUser({
      username:'',
      password:'',
      email:'',
      dob:''
    })
    //remove token from localstorage
    localStorage.removeItem('token')
  };
  
  //inspectionform data
  registrationData(newData:Data):Observable<any>{
    return this.httpClient.post('http://localhost:4000/form-api/data',newData)
   };

   getFormData(name):Observable<any>{
    return this.httpClient.get(`http://localhost:4000/form-api/data/${name}`)
   };

   getUpdatedFormData(form):Observable<any>{
    return this.httpClient.put('http://localhost:4000/form-api/data',form)
   }
}

