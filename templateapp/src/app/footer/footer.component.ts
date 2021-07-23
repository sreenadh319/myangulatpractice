import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`.footer{
    background-color: blue;
    height: 80px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
}`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
