import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.less']
})
export class WrapperComponent implements OnInit {

  @Input() template: TemplateRef<any>;
  @Input() title: string;
  @Input() visible: boolean;

  constructor() { }

  ngOnInit() { }

  toggle = () => this.visible = !this.visible;

}
