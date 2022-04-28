import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]
  constructor(private fs:FoodService, private route:ActivatedRoute) { }
   
  
  ngOnInit() {
    this.route.params.subscribe(item=>{
      if(Object.keys(item).length!=0){
        this.foods = this.fs.getAll().filter(ele=>ele.name.toLowerCase().includes(item.searchItem.toLowerCase()))
      }else{
        this.foods = this.fs.getAll()
      }
    })

    // console.log(this.route.snapshot.paramMap.get('searchItem'));
    
    // console.log(this.fs.getAll());
    // this.foods = this.fs.getAll()
  }
}
