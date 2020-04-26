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

    cart = [];

    for (let i = 0; i < products.length; i++) {

      if(products[i].quantity > 0) {
          console.log(products[i].name);
          this.cart.push(product);
      }


    }

    if(cart.lngth > 0) {
      window.alert("Checkout submitted");
    }
  }

}
