import { Injectable } from '@angular/core';
import * as DATA from './Data';
import * as CONST from './Const';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  phones = DATA.PHONES;
  messengers = DATA.MESSENGERS;
  emails = DATA.EMAILS;
  web = DATA.WEB;
  skills = DATA.SKILLS;
  experiences = DATA.EXPERIENCES;
  education = DATA.EDUCATION;
  readings = DATA.READINGS;
  languages = DATA.LANGUAGES;

  constructor() { }

  getAge = () => {
    const now = new Date();
    const span = now.getTime() - DATA.DOB.getTime();
    return Math.floor(span / CONST.YEAR);
  }

  getLocation = () => (DATA.LOCATION);

}
