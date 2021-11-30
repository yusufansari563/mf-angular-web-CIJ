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
  @Output('angular-input-event') evt = new EventEmitter<any>();
  inputValue = '';
  ngOnInit() {
    this.router.initialNavigation();
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
    this.evt.emit(event.target.value);
    // document.dispatchEvent(new CustomEvent('angular-input-event', { detail: event.target.value }));
  }
}
