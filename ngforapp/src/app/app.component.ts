import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngforapp';
  x:number = 100;
  y:number =200;
  z:number = 300;
  dropVal:string="";
  items:Array<String> = ["sreenadh","davuluri","pallerlamudi"];
  userDetails:any = [{name:"sreenadh",city:"pallerlamudi"},{name:"Davuluri",city:"Hanumna Junciton"},
  {name:"Aswani",city:"Gannavaram"},{name:"Devansh",city:"Vijayawada"}];
  
  dropDownValues:any = ["India","Pakisthan","USA"]
  drpclick = ()=>{
    if(this.dropVal != "")
      this.dropDownValues.push(this.dropVal);
      console.log(this.dropDownValues);
  }

}
