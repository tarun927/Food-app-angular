import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private cs:CartService) {
      
   }
  cart:Cart
  ngOnInit() {
    this.cart = this.cs.getCart()

  }
  quanFun(e,cartItem:CartItem){
    console.log(typeof (e.target.value-0));
    // this.cart.items.find(ele=>ele.food.id==cartItem.food.id).quantity = e.target.value-0
    console.log(this.cs.getCart());
    
    cartItem.quantity = e.target.value-0
  }
  removeFun(cartItem:CartItem){
      this.cs.removeCart(parseInt(cartItem.food.id))
  }

}
