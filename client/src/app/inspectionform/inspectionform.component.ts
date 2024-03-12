import { Component, inject} from '@angular/core';
import {FormGroup, Validators ,FormControl} from '@angular/forms';
import{ Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { Data } from '../model/formdata';
import {NgToastService} from'ng-angular-popup';
@Component({
    selector: 'app-inspectionform',
    templateUrl: './inspectionform.component.html',
    styleUrl: './inspectionform.component.css'
  })
 
  export class inspectionformComponent {
  date:any;
  totalCost:any;
   siteForm= new FormGroup({
    name:new FormControl('',[Validators.required]),
    phonenumber:new FormControl('',[Validators.required,Validators.pattern(/^[7-9]{1}[0-9]{9}$/)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',Validators.required),
    planning:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    paintingtype:new FormControl('',Validators.required),
    area:new FormControl('',Validators.required),
   });

   router=inject(Router)
   toast=inject(NgToastService)

   get name(){
    return this.siteForm.get('name')
   }
   get phonenumber(){
    return this.siteForm.get('phonenumber')
   }
   get email(){
    return this.siteForm.get('email')
  }
  get address(){
   return this.siteForm.get('address')
  }
   get planning(){
    return this.siteForm.get('planning')
   }
   get city(){
    return this.siteForm.get('city')
  }
  get paintingtype(){
   return this.siteForm.get('paintingtype')
  }
   get area(){
    return this.siteForm.get('area')
   }

   userservice=inject(UserService);
   
    onSubmit(): void {

      let{name,phonenumber,email,address,planning,city,paintingtype,area}=this.siteForm.value;
      let  newData=new Data(name,phonenumber,email,address,planning,city,paintingtype,area);
      this.userservice.registrationData(newData).subscribe({
        next:(res)=>{
          console.log(res)
          if(this.siteForm.valid){
            const formData = this.siteForm.value;
            const daysToAdd = this.calculateDaysToAdd(formData.planning);
            const expectedDate = new Date();
            const inspectionDate = new Date(expectedDate.setDate(expectedDate.getDate() + daysToAdd));
            this.date = inspectionDate.toISOString().split('T')[0];
            
            let basic:number=20;
            let cost:string=formData.area;
            this.totalCost=Number(cost)*basic;
            this.userservice.setTotalCost(this.totalCost);

            let data = {name:formData.name,date:this.date,cost:this.totalCost}
            this.userservice.getUpdatedFormData(data).subscribe({
              next:res=>{
                console.log("res after date update ",res)
                this.router.navigate([`qoute/${formData.name}`])
                this.toast.success({
                  detail:'Form Submitted',
                  summary:'Redirecting to quotation details',
                  position:'topCenter',
                  duration:3000
                  })
                
              },
              error:err=>{
                console.log("error updating date ",err)
              }
            })     
          }
        },
        error:err=>{
          console.log("error creating form data ",err)
        }
      })   
    }
 
    private calculateDaysToAdd(planning: string): number {
      switch (planning) {
        case '1-7':
          return 7;
          case '8-14':
          return 14;
          case '15-30':
          return 30;
          default:
            return 0;
      }
    }
   
  }
