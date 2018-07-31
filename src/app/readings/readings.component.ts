import { Component, OnInit, Input } from '@angular/core';
import * as CONST from '../Const';

export interface Readings {
  name: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.less']
})
export class ReadingsComponent implements OnInit {

  title = "readings";
  @Input() visible: boolean;
  readings: Readings[] = [
    {
      name: "Rangle's Angular Training Book",
      link: "https://angular-2-training-book.rangle.io",
      description: "One of the best sources about Angular (and not only!) available online. Includes: set of best practices; ready to use solutions; basic recommendations; etc. Written in a very understandable manner, so, the course can be easily understood by novice, but also contains a lot of professional tips."
    },
    {
      name: "Improved Redux type safety with typescript 2.8",
      link: "https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575",
      description: "Type safe actions/reducers/etc with TypeScript! Kudos to Martin Hochel!"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  removePathFromURL = (link: string) => (CONST.CONVERT_LINK(link).split("/").shift())

}
