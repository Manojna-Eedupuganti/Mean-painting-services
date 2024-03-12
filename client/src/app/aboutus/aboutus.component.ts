import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  cardsData=[
    {title:'Interior Painting', content:'Brush & Beyond interior wall painting services provide you seamless, efficient, and cost- effective solutions. The right wall paint can make a world of difference.',image:"https://img.freepik.com/premium-photo/marker-sketch-living-room_134262-220.jpg?size=626&ext=jpg&ga=GA1.1.332056568.1705575238&semt=ais"},
    {title:'Exterior Painting', content:'Painting your walls on the outside can complement the luxury they hold within. Choose Brush & Beyond to decorate your exteriors!', image:"https://img.freepik.com/free-photo/tree-wooden-house_1122-996.jpg?size=626&ext=jpg&ga=GA1.1.332056568.1705575238&semt=ais"},
    {title:'Commercial Painting', content:'Creative interior and exteriors are not just important to your clients. Brush & Beyond brings to you our commercial painting services.', image:"https://img.freepik.com/premium-photo/business-office-design-background-ui-ux-design_155807-229.jpg?size=626&ext=jpg&ga=GA1.1.332056568.1705575238&semt=ais"}
  ];
  }
  

