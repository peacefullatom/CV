import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import * as CONST from '../Const';

@Component({
  selector: 'app-printable',
  templateUrl: './printable.component.html',
  styleUrls: ['./printable.component.less']
})
export class PrintableComponent implements OnInit {

  constructor(public service: CommonService) { }

  ngOnInit() { }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date))

  previousDate = (index: number) => {
    if (!index)
      return "Present";

    if (index <= this.service.experiences.length - 1)
      return this.convertDate(this.service.experiences[index - 1].start);
  }

}
