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

  cart = [];
 
  addToCart(product) {
    this.cart.push(product);
    this.selectedProduct = product;
  }

}
