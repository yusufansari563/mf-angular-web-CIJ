export class Question {
  _id: string = '';
  question: string = '';
  answer: [] = [];
  last: boolean = false;
  questionNumber: string = '';
  selectedAnswer: string = '';
  component: string = '';

  constructor(json?: any) {
    if (json) {
      this._id = json._id;
      this.questionNumber = json.questionNumber;
    }
  }
}
