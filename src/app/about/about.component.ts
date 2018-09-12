import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

import { Link, Messenger } from '../Data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  title = 'about';

  phones: Link[] = [];
  messengers: Messenger[] = [];
  emails: Link[] = [];
  web: Link[] = [];

  @Input() visible: boolean;

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getPhones().subscribe((data) => this.phones = <Link[]>data || []);
    this.service.getMessengers().subscribe((data) => this.messengers = <Messenger[]>data);
    this.service.getEmails().subscribe((data) => this.emails = <Link[]>data || []);
    this.service.getWeb().subscribe((data) => this.web = <Link[]>data);
  }

}
