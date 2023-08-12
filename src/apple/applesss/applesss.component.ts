import { Component, OnInit } from '@angular/core';
import { APPLES } from '../mock-apples';
import {AppleProduct} from '../apple-product'
import { ApplleeComponent } from './appllee/appllee.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-applesss',
  templateUrl: './applesss.component.html',
  styleUrls: ['./applesss.component.css'],
  imports:[ApplleeComponent,CommonModule]
})
export class APPLESSSComponent implements OnInit {


  applesss: AppleProduct [] = [];

  
  constructor() { }
// console.log(this.applesss)
  ngOnInit() {
    this.applesss=APPLES;
  }

}