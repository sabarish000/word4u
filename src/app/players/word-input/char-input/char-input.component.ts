import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-char-input',
  templateUrl: './char-input.component.html',
  styleUrls: ['./char-input.component.css'],
})
export class CharInputComponent {

  @Input()
  private value;
  public holderValue;

  public updateValue() {
    this.holderValue = this.value;
  }
}
