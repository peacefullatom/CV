import { Component, Input, OnInit } from '@angular/core';

import { CommonService } from '../common.service';
import * as CONST from '../Const';
import { Experience } from '../Data';

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.less"]
})
export class ExperienceComponent implements OnInit {
  title = "experience";
  @Input() visible: boolean;
  experiences: Experience[] = [];

  constructor(private service: CommonService) {}

  ngOnInit() {
    this.service.getExperience().subscribe(data => {
      this.experiences = <Experience[]>data || [];

      this.experiences = this.experiences
        .map(experience => ({
          ...experience,
          start: new Date(experience.start)
        }))
        .sort((a, b) => {
          if (a.start.getTime() > b.start.getTime()) {
            return -1;
          }
          if (a.start.getTime() < b.start.getTime()) {
            return +1;
          }
          return 0;
        });
    });
  }

  convertDate = (date: Date) => CONST.CONVERT_DATE(date);

  previousDate(index: number) {
    if (!index) {
      return "Present";
    }

    if (index <= this.experiences.length - 1) {
      return this.convertDate(this.experiences[index - 1].start);
    }
  }

  glueTechnologies = (technologies: string[]) => technologies.join(", ");
}
