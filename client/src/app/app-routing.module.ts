import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { inspectionformComponent } from './inspectionform/inspectionform.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { proguardsGuard } from './proguards.guard';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { PaymentComponent } from './payment/payment.component';
import { ThanksComponent } from './thanks/thanks.component';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent},
  {path:  'register', component:RegisterComponent,},
  {path:  'login', component:LoginComponent},
  {path:'inspectionform', component:inspectionformComponent},
  {path:'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path:'qoute/:name',component:QuoteComponent},
  {path:'payment',component:PaymentComponent},
  {path:'thanks',component:ThanksComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'**', component:NotfoundComponent} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
