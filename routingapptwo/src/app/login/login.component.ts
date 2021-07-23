import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckloginService } from '../checklogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:any;
  pwd:any;
  constructor(public loginService:CheckloginService,private rt:Router) {
    if(localStorage.getItem("isLogin")?.toString() == "true" || this.loginService.isLogin == true)
    {this.loginService.isLogin = true;
      this.rt.navigate(["hm"]);
    }
  }
  login=()=>{
    if(this.uname === "scott" && this.pwd === "scott123"){
      localStorage.setItem('isLogin',"true");
      this.loginService.isLogin = true;
      this.rt.navigate(["hm"]);
    }
  }

  ngOnInit(): void {
  }

}
