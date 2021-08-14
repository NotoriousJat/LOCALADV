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
const routes: Routes = [
  
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'advisor', component: AdvisorComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'traveling', component: TravelingComponent },
  { path: 'barcelona', component: BarcelonaComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'loder', component: LoderComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'signupstep2', component: Signupstep2Component },
  { path: 'login', component: LoginComponent },
  { path: 'start', component: StartComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'mytrip', component: MytripComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
