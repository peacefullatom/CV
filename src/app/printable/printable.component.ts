import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';
import * as CONST from '../Const';
import { Education, Experience, Skill } from '../Data';

@Component({
  selector: "app-printable",
  templateUrl: "./printable.component.html",
  styleUrls: ["./printable.component.less"]
})
export class PrintableComponent implements OnInit {
  experiences: Experience[] = [];
  education: Education[] = [];
  skills: Skill[] = [];
  languages: string[] = [];
  link: string;

  constructor(public service: CommonService) {
    this.link = document.location.href;
  }

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

    this.service.getEducation().subscribe(data => {
      this.education = <Education[]>data || [];

      for (const education of this.education) {
        education.start = new Date(education.start);
        education.end = new Date(education.end);
      }
    });

    this.service.getSkills().subscribe(data => {
      this.skills = <Skill[]>data || [];
    });

    this.service.getLanguages().subscribe(data => {
      if (data instanceof Array && data.length) {
        this.languages = data[0].languages;
      } else {
        this.languages = [];
      }
    });
  }

  convertDate = (date: Date) => CONST.CONVERT_DATE(date);

  previousDate = (index: number) => {
    if (!index) {
      return "Present";
    }

    if (index <= this.experiences.length - 1) {
      return this.convertDate(this.experiences[index - 1].start);
    }
  };
}
