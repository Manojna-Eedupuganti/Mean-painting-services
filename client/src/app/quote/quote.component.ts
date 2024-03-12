import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../model/formdata';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

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
      console.log(res)
      this.formData=res.payload
    },error:err=>{
      console.log(err)
    }
  })

  }
  generatePdf() {
    const invoiceContentElement=document.getElementById('content') as HTMLElement;
    html2canvas(invoiceContentElement,{}).then(canvas=>{
      // is convert the canvas into base64 string url
      const imgData=canvas.toDataURL('image/png');
      // page width
      const pageWidth=210;
      const pageHeight=297;
      // initialize the PDF
      const pdf=new jsPDF("p","mm","a4");
      // add the image into pdf
      pdf.addImage(imgData,'PNG',0,0,pageWidth,pageHeight);

      pdf.save('invoice.pdf');
    })
  }

}

