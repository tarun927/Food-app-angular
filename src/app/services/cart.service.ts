import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   cart:Cart = new Cart()
  
  addToCart(food:Foods):void{
      let CartItm = this.cart.items.find(ele=>ele.food.id==food.id)
      if(CartItm){
        // this.changeQuantity(food.id,CartItm.quantity+1)    //if alrdy prsnt inc qnty and return
        CartItm.quantity = CartItm.quantity+1;
        return
      } 
      this.cart.items.push(new CartItem(food))   //else push new crtitm in cart
  }
  removeCart(foodId:number):void{
     this.cart.items = this.cart.items.filter(ele=>parseInt(ele.food.id)!=foodId)
  }
  
  TotalPrice():number{
    return this.cart.items.reduce((a,c)=>{
      a+=c.getPrice()
      return a
    },0)
  }
  getCart():Cart{
    return this.cart
  }
  constructor() { }
}
