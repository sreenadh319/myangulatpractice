import { Component, Inject } from '@angular/core';
import { ClassOne } from './class-one';
import { ServiceOneService } from './service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceapp';
  obj:ClassOne = new ClassOne();
  temp:ServiceOneService;
  constructor(temp:ServiceOneService,@Inject(ServiceOneService) public sree:any){
    this.temp = temp;
    this.sree.sno =  "Changed in app Component";
    this.obj.sno="Pallerlamudi"
  }
}
