import { Component, OnInit } from '@angular/core';

const dob = 1981;

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
    this.age = now.getFullYear() - dob;
  }

}
