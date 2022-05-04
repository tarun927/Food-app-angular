import { Foods } from "./food";

export class CartItem{
    food:Foods;
    quantity:number=1
    getPrice():number{
        return this.food.price*this.quantity
    }
    constructor(food:Foods){
        this.food = food
    }
}