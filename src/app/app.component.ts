import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-firebase-serverless-app';

  constructor(public app: FirebaseApp) {}
}
