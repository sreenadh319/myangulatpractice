import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template: `
    <div class="left">
      <br/><br/><br/>
      <br/><br/><br/>
      Left Menu
    <div>
  `,
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
