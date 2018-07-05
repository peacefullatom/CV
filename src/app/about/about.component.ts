import { Component, OnInit } from '@angular/core';

const dob = new Date("12.09.1981");

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  title = "about";
  folded = "false";
  age = 0;

  constructor() { }

  ngOnInit() {
    let now = new Date();
    let span = now.getTime() - dob.getTime();
    this.age = Math.floor(span / (1e3 * 60 * 60 * 24 * 365));
  }

}
