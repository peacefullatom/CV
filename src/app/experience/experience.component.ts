import { Component, OnInit } from '@angular/core';
import * as CONST from '../Const';

export interface Experience {
  role: string;
  company: string;
  start: Date;
  technologies: string[];
  description: string;
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  title = "experience";
  folded = "false";
  experiences: Experience[] = [
    {
      role: "Senior front-end developer",
      company: "Foresight LLC",
      start: new Date("04.17.2017"),
      technologies: [
        CONST.JS,
        CONST.TS,
        CONST.HTML,
        CONST.GIT,
        CONST.CSS,
        CONST.LESS,
        CONST.WP,
        CONST.R,
        CONST.RN,
        CONST.RX
      ],
      description: 'Development & support of corporate solution used in BI and analytics, resolving defects found by testers/customers. Development of mobile client on React Native and Redux.'
    },
    {
      role: "Software Developer",
      company: "SoftM LLC",
      start: new Date("03.01.2014"),
      technologies: [
        CONST.JS,
        CONST.HTML,
        CONST.CSS,
        CONST.JQ,
        CONST.SQL
      ],
      description: 'Database developer: MS SQL Server 2012. Administrator of mail server. Various tasks of business automation: automated reports generation, reminders system (based on DB and mail server, with web interface) etc. Development and support of CRM.'
    },
    {
      role: "IPTV engineer",
      company: "WildRed LLC",
      start: new Date("02.01.2014"),
      technologies: ["IPTV"],
      description: "Worked as IPTV engineer in Bolshoy Ice Dome during Olympic games 2014 on behalf of WildRed LLC. Main tasks were: initial hardware installation, support of system during Olympic games, dismantle of hardware upon event completion, resolving of issues connected with work of system in Bolshoy Ice Dome. Also worked as guide and interpreter for English speaking guests in free time on my own initiative."
    },
    {
      role: "Software Developer",
      company: "NMS CJSC",
      start: new Date("09.01.2012"),
      technologies: [
        CONST.JS,
        CONST.HTML,
        CONST.CSS,
        CONST.JQ,
        CONST.SQL
      ],
      description: "Database developer: MS SQL Server 2012. IPTV-interface developer for various set of STBs. Administrator of mail server. Various tasks of business automation: automated reports generation, reminders system (based on DB and mail server, with web interface) etc. Support of incident management system."
    },
    {
      role: "Network Operations Center Engineer",
      company: "NMS CJSC",
      start: new Date("04.01.2008"),
      technologies: [
        CONST.JS,
        CONST.HTML,
        CONST.CSS,
        CONST.SQL
      ],
      description: "Network administrator: Cisco, Huawei, etc. Mail server administrator. Administrator/developer of MS SQL 2008 database. Partly web developer."
    },
    {
      role: "Network Engineer",
      company: "OKOS LLC",
      start: new Date("07.01.2004"),
      technologies: [
        CONST.SQL
      ],
      description: "Development, management, upgrade of network, including VPNs, LANs in big buildings, joints of ISDN, ADSL, Fiber, Ethernet nets. Support of third party software running on Windows and Linux. Management of MS SQL Server 2005: database development, reports generation."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  convertDate = (date: Date) => (CONST.CONVERT_DATE(date))

  previousDate(index: number) {
    if (!index)
      return "Current";

    if (index <= this.experiences.length - 1)
      return this.convertDate(this.experiences[index - 1].start);
  }

  glueTechnologies(technologies: string[]) {
    return technologies.join(", ");
  }

}
