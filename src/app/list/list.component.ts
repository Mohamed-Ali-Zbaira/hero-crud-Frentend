import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  heros:any;
  constructor(public shared :SharedService) { }
  ngOnInit(): void {
    this.shared.getallHero().subscribe(
      res=>{
       
        this.heros=res;
      },err=>{
        console.log(err);
      }
    )
  }
  delete(id:any){
    this.shared.deletehero(id).subscribe(
      res=>{
        this.ngOnInit();
      },err=>{
        console.log(err)
      }
    )
  }
  }
