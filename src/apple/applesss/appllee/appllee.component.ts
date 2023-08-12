import { Component, Input, OnInit } from '@angular/core';
import { AppleProduct } from '../../apple-product';


@Component({
  standalone:true,
  selector: 'app-appllee',
  templateUrl: './appllee.component.html',
  styleUrls: ['./appllee.component.css']
})
export class ApplleeComponent implements OnInit {
@Input() appleProduct!: AppleProduct;
  constructor() { }

  ngOnInit() {
    console.log(this.appleProduct);
  }

}