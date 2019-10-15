import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {EmailComponent} from './email/email.component';

const routes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'onboarding/email', component: EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
