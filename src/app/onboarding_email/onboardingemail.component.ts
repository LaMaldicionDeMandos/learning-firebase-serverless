import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './onboardingemail.component.html',
  styleUrls: ['./onboardingemail.component.scss']
})
export class OnboardingemailComponent implements OnInit {

  email: string;
  user: any;

  constructor(private userService: AuthenticationService, private router: Router) {}

  setEmail() {
    this.user.updateEmail(this.email)
      .then(console.log)
      .catch(console.log);
  }

  ngOnInit(): void {
    this.userService.getUser()
      .then(user => this.user = user)
      .catch(() => this.router.navigateByUrl(''));
  }
}
