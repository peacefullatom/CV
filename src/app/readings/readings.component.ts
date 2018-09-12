import { Component, OnInit, Input } from '@angular/core';
import * as CONST from '../Const';
import { Readings } from '../Data';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.less']
})
export class ReadingsComponent implements OnInit {

  title = 'readings';
  @Input() visible: boolean;
  readings: Readings[] = [];

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getReadings().subscribe(data => {
      this.readings = <Readings[]>data || [];
    });
  }

  removePathFromURL = (link: string) => (CONST.CONVERT_LINK(link).split('/').shift());

}
