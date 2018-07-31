import { Component, OnInit, Input } from '@angular/core';
import * as CONST from '../Const';

export interface Education {
  name: string;
  link: string;
  start: Date;
  end: Date;
  description: string;
};

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {

  title = "education";
  @Input() visible: boolean;
  education: Education[] = [
    {
      name: "Permskiy Gosudarstvenniy Tekhnologicheskiy Universitet",
      link: "http://www.pstu.ru",
      start: new Date("09.01.2002"),
      end: new Date("05.01.2005"),
      description: "Control of quality at all stages of product/service life cycle. Specialized in automation of quality control.Attended courses on market analysis, systems of tracking of product/service from development to end user distribution, databases, C/C++ courses, Object-oriented programming."
    },
    {
      name: "Permskiy Khimiko Tekhnologicheskiy Tekhnikum",
      link: "http://www.phtt.ru",
      start: new Date("09.01.1999"),
      end: new Date("05.01.2002"),
      description: "Control of quality at all stages of product/service life cycle. Specialized in automation of quality control."
    },
    {
      name: "Perm's middle school #115",
      link: "http://school115pm.edusite.ru",
      start: new Date("09.01.1992"),
      end: new Date("05.01.1999"),
      description: "Middle school with medical specialization courses."
    },
    {
      name: "Perm's middle school #75",
      link: "",
      start: new Date("09.01.1988"),
      end: new Date("05.01.1992"),
      description: "Middle school."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date))

  convertLink = (link: string) => (CONST.CONVERT_LINK(link))

}
