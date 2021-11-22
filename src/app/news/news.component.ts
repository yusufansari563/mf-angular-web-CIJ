import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Question } from '../Interface/QuestionInterface';
import { ApiService } from '../news/app.api';

@Component({
  selector: 'app-question',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})


export class NewsComponent implements OnInit {
  // check:boolean = true;
  // [class.changestyle]="check"
  @Input() option = '';
  @Input() btnStyle = '';
  question: Question;
  questionNum: string = '';
  @Output('angular-input-event') evt = new EventEmitter<any>();

  constructor(private ApiService: ApiService) {
    this.question = new Question();
  }

  ngOnInit(): void {
    this.getQuestion();
    console.log(JSON.parse(this.option));
    // console.log(this.btnStyle);
  }

  getNext() {
    // console.log('hi <>?', this.question?.questionNumber);
    this.getQuestion();
  }

  reset() {
    // console.log('i got called');
    this.evt.emit();
    // this.ApiService.getQuestion(1).subscribe((resp: Question) => {
    //   console.log(resp, '<>?');
    //   this.question = resp;
    // });
  }

  getQuestion() {
    const questionNo = this.question.questionNumber
      ? parseInt(this.question.questionNumber) + 1
      : sessionStorage.getItem('questionNumber')
      ? sessionStorage.getItem('questionNumber')
      : 1;
    // console.log(questionNo, '<>??? Angular');
    this.ApiService.getQuestion(questionNo).subscribe((resp) => {
      // console.log(resp, '<>?');
      this.question = resp;
    });
  }
}
