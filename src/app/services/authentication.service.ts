import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Injectable} from '@angular/core';

export enum AuthMethod {
  PHONE = 'PHONE'
}

@Injectable()
export class AuthenticationService {
  private methods = {};
  private reCaptchaVerifier;
  private confirmationResult;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.methods[AuthMethod.PHONE] = this.authWithPhone;
  }

  loginWithMethod(method: AuthMethod, data?: any): Promise<any> {
    return this.methods[method](data);
  }

  phoneVerificationCode(code: string): Promise<any> {
    return this.confirmationResult.confirm(code);
  }

  private authWithPhone = (phone) => {
    this.firebaseAuth.auth.languageCode = 'es';
    this.reCaptchaVerifier = new auth.RecaptchaVerifier('phone_login_button', {
      size: 'invisible',
      callback: (response) => {
        console.log('re captcha ok? --> ' + JSON.stringify(response));

      }});
    return this.firebaseAuth.auth.signInWithPhoneNumber(phone, this.reCaptchaVerifier)
      .then(result => this.confirmationResult = result);
  }
}
