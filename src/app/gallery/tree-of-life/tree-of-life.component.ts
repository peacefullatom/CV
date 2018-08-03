import { Component, OnInit } from '@angular/core';

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

interface Entry {
  month: number;
  year: number;
  label: string;
  private?: boolean;
  icon: string;
}

const ENTRIES: Entry[] = [
  { private: true, icon: "fa-car", month: 11, year: 2017, label: "Bought my first van." },
  { private: true, icon: "fa-child", month: 5, year: 2017, label: "My fourth son was born." },
  { icon: "fa-user-circle", month: 3, year: 2017, label: "Employed as software developer." },
  { private: true, icon: "fa-building", month: 10, year: 2016, label: "Bought my second apartment." },
  { icon: "fa-user-circle", month: 2, year: 2014, label: "Employed as software developer." },
  { icon: "fa-user-circle", month: 1, year: 2014, label: "Worked on Olympic Games." },
  { private: true, icon: "fa-child", month: 7, year: 2013, label: "My second and third sons were born (twins!)." },
  { icon: "fa-user-circle", month: 3, year: 2012, label: "Employed as software developer." },
  { private: true, icon: "fa-building", month: 9, year: 2011, label: "Bought my first apartment." },
  { private: true, icon: "fa-child", month: 2, year: 2010, label: "My first son was born." },
  { private: true, icon: "fa-car", month: 8, year: 2008, label: "Bought my first car." },
  { icon: "fa-user-circle", month: 3, year: 2008, label: "Employed as network operations center engineer." },
  { private: true, icon: "fa-trophy", month: 7, year: 2008, label: "Got my driver's license." },
  { private: true, icon: "fa-gem", month: 8, year: 2007, label: "Wedding!" },
  { private: true, icon: "fa-heart", month: 11, year: 2005, label: "Met my wife." },
  { icon: "fa-user-circle", month: 5, year: 2004, label: "Employed as network engineer." },
  { private: true, icon: "fa-university", month: 8, year: 2002, label: "Went for university." },
  { icon: "fa-user-circle", month: 4, year: 2001, label: "Employed as website seller." },
  { private: true, icon: "fa-dollar-sign", month: 6, year: 2000, label: "Earned first money as software developer." },
  { icon: "fa-user-circle", month: 9, year: 1999, label: "Employed as furniture assembler." },
  { private: true, icon: "fa-university", month: 8, year: 1999, label: "Went for college." },
  { icon: "fa-unlink", month: 7, year: 1998, label: "Black August - it's when russian ruble was divided by zero!" },
  { private: true, icon: "fa-desktop", month: 1, year: 1997, label: "Bought my first PC." },
  { icon: "fa-user-circle", month: 0, year: 1996, label: "Worked as loader." },
  { private: true, icon: "fa-plane", month: 3, year: 1995, label: "Went to London to learn English." },
  { icon: "fa-unlink", month: 7, year: 1991, label: "The Soviet Union collapsed!" },
  { icon: "fa-desktop", month: 10, year: 1990, label: "My parents bought me first PC!" },
  { private: true, icon: "fa-university", month: 8, year: 1987, label: "Went for school." },
  { private: true, icon: "fa-bicycle", month: 5, year: 1986, label: "Learned to ride my bicycle!" },
  { icon: "fa-truck", month: 5, year: 1984, label: "My parents moved to Russia." },
  { private: true, icon: "fa-child", month: 11, year: 1981, label: "Suddenly, I was born!" }
];

@Component({
  selector: 'app-tree-of-life',
  templateUrl: './tree-of-life.component.html',
  styleUrls: ['./tree-of-life.component.less']
})
export class TreeOfLifeComponent implements OnInit {

  entries: Entry[];

  constructor() { }

  month = (month: number) => (MONTHS[month]);

  ngOnInit() {
    this.entries = ENTRIES.sort((a, b) => {
      if (a.year === b.year) {
        if (a.month < b.month)
          return +1;

        if (a.month > b.month)
          return -1;

        return 0;
      }
      else {
        if (a.year < b.year)
          return +1;
        if (a.year > b.year)
          return -1;
      }
    });
  }

}
