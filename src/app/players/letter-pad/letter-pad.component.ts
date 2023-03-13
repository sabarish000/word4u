import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-letter-pad',
  templateUrl: './letter-pad.component.html',
  styleUrls: ['./letter-pad.component.css']
})
export class LetterPadComponent implements OnInit {
  public alphabets: string[]=['A','B','C','D','E','F','G','H','I','J','K','L','M',
                              'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  public selectedAlphs = ['','','','','','','','','','','','','',
                          '','','','','','','','','','','','',''];

  public alphsInRed = ['','','','','','','','','','','','','',
                          '','','','','','','','','','','','',''];

  public alphsInGreen = ['','','','','','','','','','','','','',
                          '','','','','','','','','','','','',''];
  private counter = 0;
  private selectedValue: string = '';
  @Input()
  public isForGuessing = false;
  @Output() value = new EventEmitter<string>();
  public eraseON = false;
  private greenON = false;
  private redON = false;
  constructor() { }

  ngOnInit() {
    console.log("Letter Pad ngOnIt");
  }

  onClick($event) {
    const eventValue = $event.target.innerText;
    var index = this.alphabets.indexOf(eventValue);
    if(this.greenON) {
      this.alphsInGreen[index] = eventValue;
      return;
    }
    if(this.redON) {
      this.alphsInRed[index] = eventValue;
      return;
    }

    if(this.selectedValue === eventValue) {
      this.deselect(this.selectedValue);
    } else {
      this.selectedValue = eventValue;
      if(!this.eraseON){
        if (!this.wasClicked(index) && (this.counter < 4 || this.isForGuessing)) {
          this.selectedAlphs[index] = this.selectedValue;
          this.counter++;
          this.value.emit(this.selectedValue);
        }
      } else if(this.counter > 0 && this.selectedAlphs[index]){
        this.deselect(this.selectedValue);
      }
    }
    this.eraseON = this.selectedAlphs.some(ele => ele !== '') && this.eraseON;
    console.log("Selected alphs", this.selectedAlphs, this.selectedAlphs[index], this.counter);
  }

  private deselect(value): void {
    var index = this.alphabets.indexOf(value)
    this.selectedValue = '';
    this.selectedAlphs[index] = '';
    this.counter--;
  }

  toggleErase() {
    // Eraser ON when there is atleast on seleceted alphabet and is already OFF.
    this.eraseON = this.selectedAlphs.some(ele => ele !== '') && !this.eraseON;
    console.log("erase toggled", this.eraseON);
  }

  wasClicked(index : number){
    return this.selectedAlphs[index]
  }

  toggleGreen() {
    this.greenON = !this.greenON;
  }

  toggleRed() {
    this.redON = !this.redON;
  }
}
