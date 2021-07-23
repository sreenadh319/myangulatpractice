import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchsample',
  templateUrl: './switchsample.component.html',
  styleUrls: ['./switchsample.component.css']
})
export class SwitchsampleComponent implements OnInit {
  imgSelected:any;
  dropDownValues = [{id:"I",name:"Image I"},{id:"II",name:"Image II"},{id:"III",name:"Image III"},{id:"IV",name:"Image IV"}]; 
  constructor() { }


  ngOnInit(): void {
  }

  dropDownChanges = (e:any)=>{
    console.log(e.value);
  }

}
