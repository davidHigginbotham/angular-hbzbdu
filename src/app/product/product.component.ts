import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  isOptionsToggle = false;

  constructor() { }

  ngOnInit() {
    this.isOptionsToggle = false;
  }

  toggleOptions() {
    this.isOptionsToggle = !this.isOptionsToggle;
  }

  changeQuantity (quantity) {
    this.product.quantity = quantity;
    window.alert(this.product.quantity);
  };

}