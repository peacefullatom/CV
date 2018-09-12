import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CONST from './Const';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAge = () => {
    const now = new Date();
    const span = now.getTime() - CONST.DOB.getTime();
    return Math.floor(span / CONST.YEAR);
  }

  getLocation = () => (CONST.LOCATION);

  getPhones = () => (this.http.get('phones'));

  getMessengers = () => (this.http.get('messengers'));

  getEmails = () => (this.http.get('emails'));

  getWeb = () => (this.http.get('web'));

  getSkills = () => (this.http.get('skills'));

  getExperience = () => (this.http.get('experiences'));

  getEducation = () => (this.http.get('education'));

  getReadings = () => (this.http.get('readings'));

  getLanguages = () => (this.http.get('languages'));

}
