import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../Interface/QuestionInterface';
import { ApiService } from './app.api';

@Component({
  selector: 'app-imh-question',
  templateUrl: './imh-question.component.html',
  styleUrls: ['./imh-question.component.scss'],
})
export class ImhQuestionComponent implements OnInit {
  @Input() option = '';
  @Input() btnStyle = '';
  question: Question;
  questionNum: string = '';
  // @Output('angular-input-event') evt = new EventEmitter<any>();

  constructor(private ApiService: ApiService, private router: Router) {
    this.question = new Question();
  }

  ngOnInit(): void {
    this.getQuestion();
    // console.log(JSON.parse(this.option));
  }

  getNext() {
    this.getQuestion();
  }

  reset() {
    // this.evt.emit();
    this.router.navigateByUrl('/acknowledge');
  }

  getQuestion() {
    const questionNo = this.question.questionNumber
      ? parseInt(this.question.questionNumber) + 1
      : sessionStorage.getItem('questionNumber')
      ? sessionStorage.getItem('questionNumber')
      : 1;

    this.ApiService.getQuestion(questionNo).subscribe((resp) => {
      this.question = resp;
    });
  }
}
