import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPadComponent } from './letter-pad.component';

describe('LetterPadComponent', () => {
  let component: LetterPadComponent;
  let fixture: ComponentFixture<LetterPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
