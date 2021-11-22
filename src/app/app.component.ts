import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-app';
  @Output('angular-input-event') evt = new EventEmitter<any>();
  inputValue = '';
  
  onKey(event: any) {
    this.inputValue = event.target.value;
    this.evt.emit(event.target.value);
    // document.dispatchEvent(new CustomEvent('angular-input-event', { detail: event.target.value }));
  }
}
