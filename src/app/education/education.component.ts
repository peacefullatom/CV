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

  title = 'education';
  @Input() visible: boolean;
  education: Education[] = [];

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getEducation().subscribe(data => {
      this.education = <Education[]>data || [];

      for (const education of this.education) {
        education.start = new Date(education.start);
        education.end = new Date(education.end);
      }
    });
  }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date));

  convertLink = (link: string) => (CONST.CONVERT_LINK(link));

}
