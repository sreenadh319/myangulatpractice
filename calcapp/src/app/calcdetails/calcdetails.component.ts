import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcdetails',
  templateUrl: './calcdetails.component.html',
  styleUrls: ['./calcdetails.component.css']
})
export class CalcdetailsComponent implements OnInit {
  t1:any;
  t2:any;
  result:any="";
  constructor() { }

  ngOnInit(): void {
  }
  fun1=(e:any)=>{
      console.log();
      switch(e.target.name){
        case "+" :
            this.result = parseInt(this.t1)+parseInt(this.t2);
          break;
        case "-" :
          this.result = parseInt(this.t1)-parseInt(this.t2);
          break;
        case "*" :
          this.result = parseInt(this.t1)*parseInt(this.t2);
          break;
        case "/" :
          this.result = parseInt(this.t1)/parseInt(this.t2);
          break;
        default:
          console.log("Invalid Option");
      }
  }
}
