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

  addQuantity () {
    this.product.quantity = this.product.quantity + 1;
    window.alert("added");
     window.alert(this.product.quantity);
  };

  subtractQuantity () {
    window.alert("subtractQuantity");
    window.alert(this.product.quantity);
    if(this.product.quantity.length > 0) {
      window.alert("substracted");
      window.alert(this.product.quantity);
        this.product.quantity = this.product.quantity - 1;
    }
  };

}