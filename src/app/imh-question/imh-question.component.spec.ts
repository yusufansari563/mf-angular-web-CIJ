import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImhQuestionComponent } from './imh-question.component';

describe('ImhQuestionComponent', () => {
  let component: ImhQuestionComponent;
  let fixture: ComponentFixture<ImhQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImhQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImhQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
