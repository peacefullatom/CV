import { Component, OnInit } from '@angular/core';
import * as CONST from '../Const';

const MINUTES = "minute(s)";
const HOURS = "hour(s)";
const DAYS = "day(s)";
const MONTHS = "month(s)";
const YEARS = "year(s)";

const MINUTE = 1e3 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * ((28 + 31) / 2);
const YEAR = DAY * 365;

export interface Skill {
  name: string;
  start: Date;
}

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.less']
})
export class TechnicalSkillsComponent implements OnInit {

  title = "technical skills";
  folded = "false";
  skills: Skill[] = [
    { name: CONST.JS, start: new Date("2008") },
    { name: CONST.TS, start: new Date("2016") },
    { name: CONST.HTML, start: new Date("2008") },
    { name: CONST.CSS, start: new Date("2008") },
    { name: CONST.LESS, start: new Date("2017") },
    { name: CONST.NODE, start: new Date("2015") },
    { name: CONST.WP, start: new Date("2017") },
    { name: CONST.BABEL, start: new Date("2016") },
    { name: CONST.JQ, start: new Date("2012") },
    { name: CONST.A1X, start: new Date("2016") },
    { name: CONST.A2X, start: new Date("2017") },
    { name: CONST.R, start: new Date("11.01.2017") },
    { name: CONST.RN, start: new Date("11.01.2017") },
    { name: CONST.RX, start: new Date("11.01.2017") },
    { name: CONST.SQL, start: new Date("2005") },
    { name: CONST.MD, start: new Date("2016") },
    { name: CONST.GIT, start: new Date("2016") }
  ];


  constructor() { }

  ngOnInit() {
  }

  getSpan(start: Date) {
    const calcSpan = (span, range) => (Math.floor(span / range).toString());
    const makeMark = (span, range) => (span + "+ " + range);
    const stamp = start.getTime();
    const mark = "0";

    if (!isNaN(stamp)) {
      let span = new Date().getTime() - stamp;

      if (span < HOUR)
        return makeMark(calcSpan(span, MINUTE), MINUTES);
      else if (span < DAY)
        return makeMark(calcSpan(span, HOUR), HOURS);
      else if (span < MONTH)
        return makeMark(calcSpan(span, DAY), DAYS);
      else if (span < YEAR)
        return makeMark(calcSpan(span, MONTH), MONTHS);
      else
        return makeMark(calcSpan(span, YEAR), YEARS);
    }
    else
      return makeMark(mark, MINUTES);
  }

}
