import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
    payment=new FormGroup({
      cardno:new FormControl('',Validators.required),
      cvv:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      expdate:new FormControl('',Validators.required),
      amount:new FormControl('',Validators.required)
    })

    router=inject(Router)
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
    get amount(){
      return this.payment.get('amount')
    }

    onSubmit():void{
      this.router.navigate(['/thanks'])
    }

}
