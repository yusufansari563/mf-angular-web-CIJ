import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'angular-app';
  // @Output('angular-input-event-2') evt2 = new EventEmitter<any>();
  inputValue = '';
  ngOnInit() {
    this.router.initialNavigation();
  }
  printReact(a: any) {
    console.log(a);
    // console.log(this.evt2.length);
    // this.evt2.emit();
  }

  onKey(event: any) {
    // this.inputValue = event.target.value;
    // this.evt.emit(event.target.value);
    // document.dispatchEvent(new CustomEvent('angular-input-event', { detail: event.target.value }));
  }
}
