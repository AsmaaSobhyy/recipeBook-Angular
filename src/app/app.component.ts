import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature='recipe';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB5F4cKpbVo1mWyf9QgGX9FyyBIY6L-yy8",
    authDomain: "ng-recipe-book-65854.firebaseapp.com"
      
    });
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;

  }
 
 
}
