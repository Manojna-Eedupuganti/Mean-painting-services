import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../model/formdata';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

userService=inject(UserService)
router=inject(Router)
activatedRoute=inject(ActivatedRoute)
formData:Data

ngOnInit(){
  let name=this.activatedRoute.snapshot.paramMap.get('name');
  this.userService.getFormData(name).subscribe({
    next:res=>{
      this.formData=res.payload
    },error:err=>{
      console.log(err)
    }

  })

  }
}

