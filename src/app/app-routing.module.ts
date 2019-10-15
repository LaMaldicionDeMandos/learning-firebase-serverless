import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {OnboardingemailComponent} from './onboarding_email/onboardingemail.component';

const routes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'onboarding/email', component: OnboardingemailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
