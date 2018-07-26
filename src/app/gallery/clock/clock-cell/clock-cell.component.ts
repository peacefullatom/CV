import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock-cell',
  templateUrl: './clock-cell.component.html',
  styleUrls: ['./clock-cell.component.less']
})
export class ClockCellComponent implements OnInit {

  @Input() name: string;
  @Input() state: number;

  constructor() { }

  ngOnInit() {
  }

}
