import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpapp';
  dropDownData:any;
  constructor(private ht:HttpClient){
  }
  loadDropDown=(e:any)=>{
    this.ht.get("https://restcountries.eu/rest/v2/all").subscribe(dt=>{this.dropDownData=dt;
    console.log(dt);
  });
  }
  
}
