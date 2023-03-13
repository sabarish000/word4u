import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit{
  public word = ['','','',''];
  public hasRepeatedChars: boolean = false;
  public validWord: boolean = false;
  private eraseON = false;
  private wordLength = 0;
  @Input() inputValue: string;
  @Output() inputValueChanged = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("Letter Pad ngOnIt");
    this.validWord = false;
    console.log("validWord",this.validWord);
  }
  
  updateWord(value: string, index: number) {
    this.word[index] = value;
    this.wordLength++;
    this.validWord = this.wordLength === 4
    this.validWord ? this.valueChange.emit(this.word.join('')) : this.valueChange.emit(undefined);
  }

  setHolderValue($event, index: number){
    console.log("In setHolderValue", this.inputValue, index);
    if(this.eraseON) {
      $event.target.innerText = '';
      this.updateWord('', index);
      if(this.word.join('') === '') {
        this.toggleErase();
      }
    } else if(this.inputValue){
      $event.target.innerText = this.inputValue;
      this.updateWord(this.inputValue, index);
      console.log("In setHolderValue", $event.target.innerText);
      this.inputValueChanged.emit(true);
    }
  }

  toggleErase(){
    this.eraseON = !this.eraseON;
    console.log("erase toggled", this.eraseON);
  }
}
