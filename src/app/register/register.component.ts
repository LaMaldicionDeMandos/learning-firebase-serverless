import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthMethod} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  phone: string;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  loginWithPhone() {
    this.authenticationService.loginWithMethod(AuthMethod.PHONE, this.phone);
  }

}
