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
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { Library } from '@fortawesome/fontawesome-svg-core';

import { HomeMenuComponent } from './survey/home-menu/home-menu.component';
import { Loder2Component } from './survey/loder2/loder2.component';
import { Start1Component } from './survey/start1/start1.component';
import { ActivityComponent } from './survey/activity/activity.component';
import { Confirmation1Component } from './survey/confirmation1/confirmation1.component';
import { MyprofileComponent } from './survey/myprofile/myprofile.component';
import { TicketsComponent } from './survey/tickets/tickets.component';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { PaymentComponent } from './survey/payment/payment.component';
import { ConfirmedComponent } from './survey/confirmed/confirmed.component';
import { UserprofileComponent } from './survey/userprofile/userprofile.component';
import { ContactusComponent } from './survey/contactus/contactus.component';
import { PricedetailComponent } from './survey/pricedetail/pricedetail.component';
import { AllticketsComponent } from './survey/alltickets/alltickets.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
   imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    ]),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
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
    HomeMenuComponent,
    Loder2Component,
    Start1Component,
    ActivityComponent,
    Confirmation1Component,
    MyprofileComponent,
    TicketsComponent,
    PaymentComponent,
    ConfirmedComponent,
    UserprofileComponent,
    ContactusComponent,
    PricedetailComponent,
    AllticketsComponent,
    
    
  ],
 
  exports: [
    HeaderComponent,
  FooterComponent,
  RouterModule,
  FontAwesomeModule,
],
  providers: [{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
