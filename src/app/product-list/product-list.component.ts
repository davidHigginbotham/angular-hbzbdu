import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  selectedProduct;
  isOptionsToggle = false;

 toggleOptions() {
    this.isOptionsToggle = !this.isOptionsToggle;
  }
  
  selectProduct(product) {
    this.selectedProduct = product;
  }

}
