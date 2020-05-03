import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';	
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product;

  @Output() notify = new EventEmitter();	
  isOptionsToggle = false;	

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
   this.isOptionsToggle = false;	
     this.route.paramMap.subscribe(params => {
     this.product = products[+params.get('productId')];
   });
  }

  toggleOptions() {	
    this.isOptionsToggle = !this.isOptionsToggle;	
  }	

  addQuantity () {	
    this.product.quantity = this.product.quantity + 1;	
    window.alert("added");	
     window.alert(this.product.quantity);	
     this.addToCart();
  };	

  subtractQuantity () {	
    window.alert("subtractQuantity");	
    window.alert(this.product.quantity);	
    if(this.product.quantity.length > 0) {	
      window.alert("substracted");	
      window.alert(this.product.quantity);	
        this.product.quantity = this.product.quantity - 1;	
    }	
    if(this.product.quantity.length == 0) {
      this.removeFromCart();
    }	
  };

  addToCart() {
    this.cartService.addToCart(this.product);
    window.alert('Your product has been added to the cart!');
  }

 removeFromCart() {
    this.cartService.removeFromCart(product);
    window.alert('Your product has been added to the cart!');
  }

}