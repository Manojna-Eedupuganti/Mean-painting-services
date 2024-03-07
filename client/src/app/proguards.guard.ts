import { CanActivateFn ,Router} from '@angular/router';
import { UserService } from './services/user.service';
import{inject} from '@angular/core'

export const proguardsGuard: CanActivateFn = (route, state) => {
  let status:boolean; 
  const router=inject(Router)
  const userservice=inject(UserService)
  userservice.getUserLoginStatus().subscribe({
    next:(loginStatus)=>{status=loginStatus}
  })
  if(status){
    return true;
  }else{
    return router.navigate(['login'])
  }
};
