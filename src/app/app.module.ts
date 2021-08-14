import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './survey/layout/header/header.component';
import { FooterComponent } from './survey/layout/footer/footer.component';
import { IndexComponent } from './survey/index/index.component';
import { AdvisorComponent } from './survey/advisor/advisor.component';
import { CalendarComponent } from './survey/calendar/calendar.component';
// Datepicker module
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TravelingComponent } from './survey/traveling/traveling.component';
import { BarcelonaComponent } from './survey/barcelona/barcelona.component';
import { InterestComponent } from './survey/interest/interest.component';
import { DiscoverComponent } from './survey/discover/discover.component';
import { BudgetComponent } from './survey/budget/budget.component';
import { LoderComponent } from './survey/loder/loder.component';
import { WelcomeComponent } from './survey/welcome/welcome.component';
import { SingupComponent } from './survey/singup/singup.component';
import { Signupstep2Component } from './survey/signupstep2/signupstep2.component';
import { LoginComponent } from './survey/login/login.component';
import { StartComponent } from './survey/start/start.component';
import { ConfirmationComponent } from './survey/confirmation/confirmation.component';
import { MytripComponent } from './survey/mytrip/mytrip.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AdvisorComponent,
    CalendarComponent,
    TravelingComponent,
    BarcelonaComponent,
    InterestComponent,
    DiscoverComponent,
    BudgetComponent,
    LoderComponent,
    WelcomeComponent,
    SingupComponent,
    Signupstep2Component,
    LoginComponent,
    StartComponent,
    ConfirmationComponent,
    MytripComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    
    NgbModule,
    
    
    
    
  ],
  exports: [
    HeaderComponent,
  FooterComponent,
  RouterModule,
  FontAwesomeModule,
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
