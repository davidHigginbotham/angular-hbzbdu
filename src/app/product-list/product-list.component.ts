import { Component } from '@angular/core';

import { products } from '../products';
import { MenuService } from '../menu-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:  [ MenuService ]
})

export class ProductListComponent {
  products = products;
  selectedProduct;

  cart = [];

  constructor(private service: MenuService) {

  }
 
 
  ngOnInit() {
//get ? menu
  }

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
