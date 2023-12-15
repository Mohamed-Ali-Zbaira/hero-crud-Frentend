import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  hero:any;
  id:any;
  constructor(private  act :ActivatedRoute, private shared :SharedService ,private router: Router) { }
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id')
    console.log(this.id);
    this.shared.getbyid(this.id).subscribe(
      res=>{
        this.hero=res
      },err=>{
        console.log(err);
        
      }
    )
  }
  Update(){
    this.shared.update(this.id,this.hero).subscribe(
      res=>{
        this.router.navigate(['/List']);
      },err=>{
        console.log(err);
        
      }
    )
  }
}
