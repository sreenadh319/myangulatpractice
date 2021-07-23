import { Component, OnInit } from '@angular/core';
import { ClassOne } from '../class-one';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {
  obj:ClassOne = new ClassOne();
  constructor() { 
    this.obj.sno = "Davuluri";
  }

  ngOnInit(): void {
  }

}
