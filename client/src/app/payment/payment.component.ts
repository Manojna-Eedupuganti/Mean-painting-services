import { Component,inject,OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../model/formdata';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
    
  ngOnInit(): void {
    this.userService.getTotalCost().subscribe({
      next:(res)=>{
        this.totalCost = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

    totalCost:number;
    payment=new FormGroup({
      cardno:new FormControl('',[Validators.required,Validators.pattern(/^(\d{4}){3}$/)]),
      cvv:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{3}$/)]),
      name:new FormControl('',Validators.required),
      expdate:new FormControl('',Validators.required),
      // amount:new FormControl({value:this.totalCost},Validators.required)
    })

    router=inject(Router);
    userService=inject(UserService);
    formData:Data;
    

    get cardno(){
      return this.payment.get('cardno')
    }
    get cvv(){
      return this.payment.get('cvv')
    }
    get name(){
      return this.payment.get('name')
    }
    get expdate(){
      return this.payment.get('expdate')
    }
    // get amount(){
    //   return this.payment.get('amount')
    // }

    

    onSubmit():void{
      if (this.payment.valid){
      this.router.navigate(['/thanks'])
      }
    }

}
