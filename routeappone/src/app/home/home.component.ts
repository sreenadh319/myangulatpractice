import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  param1:any="";
  param2:any="";
  constructor(private ac:ActivatedRoute) {
    this.ac.params.subscribe((dt:any)=>{
      console.log(dt);
      this.param1=dt.param1;
      this.param2=dt.param2;
    })
   }

  ngOnInit(): void {
  }

}
