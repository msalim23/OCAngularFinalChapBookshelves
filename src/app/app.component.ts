import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyB8zS0B-p_aft9l_83giGqvbDJCfh-7bPg",
      authDomain: "projet-oc-angular.firebaseapp.com",
      databaseURL: "https://projet-oc-angular.firebaseio.com",
      projectId: "projet-oc-angular",
      storageBucket: "projet-oc-angular.appspot.com",
      messagingSenderId: "40717692922"
    };
    firebase.initializeApp(config);
  }
}
