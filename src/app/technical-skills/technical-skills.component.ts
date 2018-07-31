import { Component, OnInit, Input } from '@angular/core';
import * as CONST from '../Const';
import { StmtModifier } from '../../../node_modules/@angular/compiler';

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
  end?: Date;
}

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.less']
})
export class TechnicalSkillsComponent implements OnInit {

  title = "technical skills";
  @Input() visible: boolean;
  skills: Skill[] = [
    { name: CONST.JS, start: new Date("10.01.2008") },
    { name: CONST.TS, start: new Date("01.01.2016") },
    { name: CONST.HTML, start: new Date("01.01.2008") },
    { name: CONST.CSS, start: new Date("05.01.2008") },
    { name: CONST.LESS, start: new Date("08.01.2016") },
    { name: CONST.NODE, start: new Date("02.01.2015") },
    { name: CONST.WP, start: new Date("04.01.2017") },
    { name: CONST.BABEL, start: new Date("10.01.2016") },
    { name: CONST.JQ, start: new Date("12.01.2012") },
    { name: CONST.A1X, start: new Date("12.01.2016") },
    { name: CONST.A2X, start: new Date("02.01.2017") },
    { name: CONST.R, start: new Date("11.01.2017") },
    { name: CONST.RN, start: new Date("11.01.2017") },
    { name: CONST.RX, start: new Date("11.01.2017") },
    { name: CONST.SQL, start: new Date("03.01.2007"), end: new Date("04.01.2017") },
    { name: CONST.MD, start: new Date("04.01.2016") },
    { name: CONST.GIT, start: new Date("11.01.2016") }
  ];
  minValue: number;
  maxValue: number;
  minPosition = 0;
  maxPosition = 100;
  scale: number;
  marks = [0, 20, 40, 60, 80];

  constructor() {
    for (let i in this.skills) {
      const skill = this.skills[i];
      const start = skill.start.getTime();
      const end = skill.end instanceof Date ? skill.end.getTime() : skill.start.getTime();

      if (this.minValue === undefined || this.minValue > start)
        this.minValue = start;

      if (this.maxValue === undefined || this.maxValue < end)
        this.maxValue = end;
    }

    if (this.minValue === undefined || this.maxValue === undefined) {
      this.minValue = 0;
      this.maxValue = 100;
    }

    this.minValue = Math.log(this.minValue);
    this.maxValue = Math.log(this.maxValue);

    this.scale = (this.maxValue - this.minValue) / (this.maxPosition - this.minPosition);
  }

  ngOnInit() { }

  value = (value: number) => (Math.exp((this.maxPosition - value - this.minPosition) * this.scale + this.minValue));

  position = (value: number) => (this.maxPosition - (Math.log(value) - this.minValue) / this.scale);

  getMark = (value: number) => (this.getSpan(new Date(this.value(value))));

  getSpan(start: Date, end?: Date) {
    const calcSpan = (span, range) => (Math.floor(span / range).toString());
    const makeMark = (span, range) => (span + "+ " + range);
    const stamp = start.getTime();
    const mark = "0";

    if (!isNaN(stamp)) {
      let span = (end instanceof Date ? end.getTime() : new Date().getTime()) - stamp;

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
