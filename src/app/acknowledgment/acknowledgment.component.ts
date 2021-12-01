import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-acknowledgment',
  templateUrl: './acknowledgment.component.html',
  styleUrls: ['./acknowledgment.component.scss'],
})
export class AcknowledgmentComponent implements OnInit {
  @Output('angular-input-event') evt = new EventEmitter<any>();

  constructor() {}

  exitImh() {
    console.log('jack');
    
    this.evt.emit();
  }

  ngOnInit(): void {}
}
