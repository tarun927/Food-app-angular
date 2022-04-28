import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText:string=''
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(item=>this.searchText=item.searchItem)
  }
 
  searchFun(){
    console.log("INNNNN");
    
   this.router.navigate(['/search',this.searchText])
  }
  // keyFun(val){
  //   this.searchText = val;
  // }
}
