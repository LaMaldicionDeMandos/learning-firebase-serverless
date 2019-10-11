export enum AuthMethod {
  PHONE = 'PHONE'
}

export class AuthenticationService {
  private methods = {};

  constructor() {
    this.methods[AuthMethod.PHONE] = (phone) => console.log('Login con telefono: ' + phone);
  }

  loginWithMethod(method: AuthMethod, data?: any) {
    this.methods[method](data);
  }
}
