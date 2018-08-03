import { Component, OnInit, Input } from '@angular/core';
import * as CONST from '../Const';
import { Experience } from '../Data';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  title = "experience";
  @Input() visible: boolean;
  experiences: Experience[];

  constructor(private service: CommonService) {
    this.experiences = this.service.experiences;
  }

  ngOnInit() { }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date))

  previousDate(index: number) {
    if (!index)
      return "Present";

    if (index <= this.experiences.length - 1)
      return this.convertDate(this.experiences[index - 1].start);
  }

  glueTechnologies = (technologies: string[]) => (technologies.join(", "));

}
