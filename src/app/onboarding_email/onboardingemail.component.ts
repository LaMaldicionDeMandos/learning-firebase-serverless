import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-email',
  templateUrl: './onboardingemail.component.html',
  styleUrls: ['./onboardingemail.component.scss']
})
export class OnboardingemailComponent {

  email: string;
  user: any;

  constructor() {
    this.user = auth().currentUser;
  }

  setEmail() {
    this.user.updateEmail(this.email)
      .then(user => localStorage.setItem('user', JSON.stringify(this.user)))
      .catch(console.log);
  }
}
