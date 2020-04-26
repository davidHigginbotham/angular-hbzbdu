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
 
  checkout() {

    for (let i = 0; i < products.length; i++) {

      if(products[i].quantity > 0) {
          window.alert(products[i].quantity);
          console.log(products[i].name);
          this.cart.push(products[i]);
      }

    }

    if(this.cart.length > 0) {

      window.alert("Checkout submitted");

    }
  }

}
