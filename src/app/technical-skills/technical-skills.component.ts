import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';
import * as CONST from '../Const';
import { Skill } from '../Data';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.less']
})
export class TechnicalSkillsComponent implements OnInit {

  title = "technical skills";
  @Input() visible: boolean;
  skills: Skill[];
  minValue: number;
  maxValue: number;
  minPosition = 0;
  maxPosition = 100;
  scale: number;
  marks = [0, 20, 40, 60, 80];

  constructor(private service: CommonService) {
    this.skills = this.service.skills || [];

    for (let i = 0; i < this.skills.length; i++) {
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
    const calcSpan = (span: number, range: number) => (Math.floor(span / range).toString());
    const makeMark = (span: string, range: string) => (span + "+ " + range);
    const stamp = start.getTime();
    const mark = "0";

    if (!isNaN(stamp)) {
      let span = (end instanceof Date ? end.getTime() : new Date().getTime()) - stamp;

      if (span < CONST.HOUR)
        return makeMark(calcSpan(span, CONST.MINUTE), CONST.MINUTES);
      else if (span < CONST.DAY)
        return makeMark(calcSpan(span, CONST.HOUR), CONST.HOURS);
      else if (span < CONST.MONTH)
        return makeMark(calcSpan(span, CONST.DAY), CONST.DAYS);
      else if (span < CONST.YEAR)
        return makeMark(calcSpan(span, CONST.MONTH), CONST.MONTHS);
      else
        return makeMark(calcSpan(span, CONST.YEAR), CONST.YEARS);
    }
    else
      return makeMark(mark, CONST.MINUTES);
  }

}
