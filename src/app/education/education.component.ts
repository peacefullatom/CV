import { Component, OnInit, Input } from '@angular/core';
import * as CONST from '../Const';
import { CommonService } from '../common.service';
import { Education } from '../Data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {

  title = "education";
  @Input() visible: boolean;
  education: Education[];

  constructor(private service: CommonService) {
    this.education = this.service.education;
  }

  ngOnInit() { }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date))

  convertLink = (link: string) => (CONST.CONVERT_LINK(link))

}
