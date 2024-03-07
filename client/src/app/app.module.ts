import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { inspectionformComponent } from './inspectionform/inspectionform.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authInterceptor } from './auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { QuoteComponent } from './quote/quote.component';
import { ThanksComponent } from './thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    inspectionformComponent,
    NotfoundComponent,
    FooterComponent,
    PaymentComponent,
    QuoteComponent,
    ThanksComponent
   
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [
      provideHttpClient(withFetch()),
      provideHttpClient(withInterceptors([authInterceptor]))
    ],

    bootstrap: [AppComponent]
  })
  export class AppModule { }