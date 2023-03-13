import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharInputComponent } from './char-input.component';

describe('CharInputComponent', () => {
  let component: CharInputComponent;
  let fixture: ComponentFixture<CharInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
