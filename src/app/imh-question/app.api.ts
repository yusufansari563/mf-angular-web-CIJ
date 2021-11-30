import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../Interface/UserInterface';
import { Question } from '../Interface/QuestionInterface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getQuestion(number: any): Observable<Question> {
    return this.http
      .get<Question>('http://localhost:5000/api/v1/question?no=' + number)
      .pipe((response) => {
        // console.log(response, '<>??');
        return response;
      });
  }

  // getAnnouncementsByCode(code: string): Observable<Announcement> {
  //   const httpurl = this.url + this.getPracticeId() + '/announcementbycode/' + code;
  //   return this.http.get(httpurl).pipe(
  //   map(response => {
  //   const pr: any = response;
  //   return new Announcement(pr);
  //   }),
}
