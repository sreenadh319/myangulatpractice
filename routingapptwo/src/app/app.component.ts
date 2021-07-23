import { Component } from '@angular/core';
import { CheckloginService } from './checklogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingapptwo';
  constructor(public loginService:CheckloginService){

  }
}
