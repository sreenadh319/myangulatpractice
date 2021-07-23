import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckloginService {
  isLogin:Boolean;
  constructor() {
    this.isLogin = false;
   }
}
