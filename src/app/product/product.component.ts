import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { prodmods } from '../prodmods';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
prodmods = prodmods;
isOptionsToggle = false;
  constructor() { }

  ngOnInit() {
  }

  toggleOptions() {
    this.isOptionsToggle = !this.isOptionsToggle;
  }
  
}