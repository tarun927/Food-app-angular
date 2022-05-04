import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { CartItem } from '../shared/models/cartItem';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods
  constructor(private fs:FoodService, private route:ActivatedRoute,private router:Router, private cs:CartService) { }
  
  ngOnInit() {
    this.route.params.subscribe((obj)=>{
      this.food = this.fs.getFoodById(obj.id)
    })
  }
  addCartBtn(){
    this.cs.addToCart(this.food)
    console.log(this.cs.cart);
    this.router.navigate(['cart-page'])
  }

}
