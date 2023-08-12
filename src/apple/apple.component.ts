import { Component, OnInit } from '@angular/core';
import { APPLESDetailsComponent } from './apples-details/apples-details.component';
import { APPLESSSComponent } from './applesss/applesss.component';


@Component({
 standalone:true,
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
  imports:[APPLESSSComponent,APPLESDetailsComponent]

})
export class AppleComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

}