import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
