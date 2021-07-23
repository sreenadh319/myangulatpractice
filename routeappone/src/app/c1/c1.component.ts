import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  paramName:any="";
  paramCity:any="";
  constructor(private ac:ActivatedRoute) {
    this.ac.params.subscribe((dt:any)=>{
      console.log(dt);
      this.paramName=dt.name;
      this.paramCity=dt.city;
    })
   }

  ngOnInit(): void {
  }

}
