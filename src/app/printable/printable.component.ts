import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Experience, Education, Skill } from '../Data';
import * as CONST from '../Const';

@Component({
  selector: 'app-printable',
  templateUrl: './printable.component.html',
  styleUrls: ['./printable.component.less']
})
export class PrintableComponent implements OnInit {

  experiences: Experience[] = [];
  education: Education[] = [];
  skills: Skill[] = [];
  languages: string[] = [];

  constructor(public service: CommonService) { }

  ngOnInit() {
    this.service.getExperience().subscribe(data => {
      this.experiences = <Experience[]>data || [];

      for (const experience of this.experiences) {
        experience.start = new Date(experience.start);
      }
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
      this.languages = <string[]>data || [];
    });
  }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date));

  previousDate = (index: number) => {
    if (!index) {
      return 'Present';
    }

    if (index <= this.experiences.length - 1) {
      return this.convertDate(this.experiences[index - 1].start);
    }
  }

}
