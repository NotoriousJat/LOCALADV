import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './survey/index/index.component';
import { AdvisorComponent } from './survey/advisor/advisor.component';
import { CalendarComponent } from './survey/calendar/calendar.component';
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
import { HomeMenuComponent } from './survey/home-menu/home-menu.component';
import { Loder2Component } from './survey/loder2/loder2.component';
import { Start1Component } from './survey/start1/start1.component';
import { ActivityComponent } from './survey/activity/activity.component';
import { Confirmation1Component } from './survey/confirmation1/confirmation1.component';
import { MyprofileComponent } from './survey/myprofile/myprofile.component';
import { TicketsComponent } from './survey/tickets/tickets.component';
import { PaymentComponent } from './survey/payment/payment.component';
import { ConfirmedComponent } from './survey/confirmed/confirmed.component';
import { UserprofileComponent } from './survey/userprofile/userprofile.component';
import { ContactusComponent } from './survey/contactus/contactus.component';
import { PricedetailComponent } from './survey/pricedetail/pricedetail.component';
import { AllticketsComponent } from './survey/alltickets/alltickets.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent , data: {animation: 'HomePage'} },
  { path: 'advisor', component: AdvisorComponent,data: {animation: 'AboutPage'}  },
  { path: 'calendar', component: CalendarComponent,data: {animation: 'CalendarPage'}  },
  { path: 'traveling', component: TravelingComponent,data: {animation: 'TravelingPage'} },
  { path: 'barcelona', component: BarcelonaComponent,data: {animation: 'BarcelonaPage'}  },
  { path: 'interest', component: InterestComponent ,data: {animation: 'InterestPage'}},
  { path: 'discover', component: DiscoverComponent ,data: {animation: 'DiscovertPage'}},
  { path: 'budget', component: BudgetComponent,data: {animation: 'BudgetPage'} },
  { path: 'loder', component: LoderComponent ,data: {animation: 'LoderPage'} },
  { path: 'welcome', component: WelcomeComponent,data: {animation: 'WelcomePage'}},
  { path: 'singup', component: SingupComponent,data: {animation: 'SingupPage'} },
  { path: 'signupstep2', component: Signupstep2Component,data: {animation: 'Signupstep2Page'} },
  { path: 'login', component: LoginComponent,data: {animation: 'LoginPage'} },
  { path: 'start', component: StartComponent,data: {animation: 'StartPage'} },
  { path: 'confirmation', component: ConfirmationComponent,data: {animation: 'ConfirmationPage'} },
  { path: 'mytrip', component: MytripComponent,data: {animation: 'MytripPage'} },
  { path: 'home-menu', component: HomeMenuComponent,data: {animation: 'Home-menuPage'} },
  { path: 'loder2', component: Loder2Component ,data: {animation: 'Loder2Page'} },
  { path: 'start1', component: Start1Component,data: {animation: 'Start1Page'} },
  { path: 'activity', component: ActivityComponent,data: {animation: 'ActivityPage'} },
  { path: 'confirmation1', component: Confirmation1Component,data: {animation: 'Confirmation1Page'} },
  { path: 'myprofile', component: MyprofileComponent,data: {animation: 'MyprofilePage'} },
  { path: 'tickets', component: TicketsComponent,data: {animation: 'TicketsPage'} },
  { path: 'payment', component: PaymentComponent,data: {animation: 'PaymentPage'} },
  { path: 'confirmed', component: ConfirmedComponent,data: {animation: 'ConfirmedPage'} },
  { path: 'userprofile', component: UserprofileComponent,data: {animation: 'UserpofilePage'} },
  { path: 'contactus', component: ContactusComponent,data: {animation: 'ContactusPage'} },
  { path: 'pricedetail', component: PricedetailComponent,data: {animation: 'PricedetailPage'} },
  { path: 'alltickets', component: AllticketsComponent,data: {animation: 'AllticketsPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
