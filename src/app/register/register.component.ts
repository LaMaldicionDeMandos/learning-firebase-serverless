import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthMethod} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  phone: string;
  verificationCode: string;
  phoneNumberIsValid = false;
  loginInfo;
  user;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  loginWithPhone() {
    this.authenticationService.loginWithMethod(AuthMethod.PHONE, this.phone)
      .then(result => this.phoneNumberIsValid = true)
      .catch(console.log);
  }

  phoneVerificationCode() {
    this.authenticationService.phoneVerificationCode(this.verificationCode)
      .then(result => {
        console.log(result);
        this.loginInfo = result;
        this.user = result.user;
        //localStorage.setItem('user_info', JSON.stringify(result));
        this.router.navigateByUrl('onboarding/email');
      })
      .catch(console.log);
  }

}
