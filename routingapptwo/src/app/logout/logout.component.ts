
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckloginService } from '../checklogin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:CheckloginService,private rt:Router) {
    this.loginService.isLogin = false;
    localStorage.removeItem('isLogin');    
   }

   
  ngOnInit(): void {

  }

}
