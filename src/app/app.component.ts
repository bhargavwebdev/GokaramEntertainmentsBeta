import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GokaramEntertainments';

  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyDWGUpaw6_gn1XYHt1QPD0w-DBf2vBiQxE",
        authDomain: "gokaram-entertainments-1a196.firebaseapp.com",
       }
    )
  }
}
