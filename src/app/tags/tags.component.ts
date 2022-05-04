import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  // status: boolean = false;
  constructor(private fs:FoodService) { }
  @Output() sendFoods : EventEmitter<any>=new EventEmitter() 
  @Input() foodPageTags:string[]
  tags:{
    string?:number
  }

  ngOnInit() {
    if(this.foodPageTags) return
    
      this.tags = this.fs.getAll().reduce((a,c)=>{
          c.tags.map(ele=>{
             if(a[ele]){
               a[ele]++
             }else{
               a[ele] = 1
             }
            // if(a.find(ea=>ea==ele)){
              
            // }else{
            //    a.push(ele)
            // }
          })
          return a
      },{})
      console.log(this.tags);
  }

  tagClick(objItem){
     let random = this.fs.getAll().filter(ele=>ele.tags.includes(objItem.key))
     console.log(random);
     this.sendFoods.emit(random)
  }

  allFoodTag(){
    this.sendFoods.emit(this.fs.getAll())
  }
}
