import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  title = "about";
  @Input() visible: boolean;

  constructor(public service: CommonService) { }

  ngOnInit() { }

}
