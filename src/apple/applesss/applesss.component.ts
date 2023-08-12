import { Component, OnInit } from '@angular/core';
import { APPLES } from '../mock-apples';
import {AppleProduct} from '../apple-product'

@Component({
  standalone:true,
  selector: 'app-applesss',
  templateUrl: './applesss.component.html',
  styleUrls: ['./applesss.component.css']
})
export class APPLESSSComponent implements OnInit {


  applesss: AppleProduct [] = APPLES;

  
  constructor() { }
// console.log(this.applesss)
  ngOnInit() {
  }

}