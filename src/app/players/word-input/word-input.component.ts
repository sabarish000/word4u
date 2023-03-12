import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit{
  // private c1: string = '';
  // private c2: string = '';
  // private c3: string = '';
  // private c4: string = '';
  // private regExp: RegExp = new RegExp('^[A-Za-z]{1}');

  public word = new Array<string>(4);
  public hasRepeatedChars: boolean = false;
  private eventsSubscription: Subscription;
  public validChar: boolean = true;
  public validWord: boolean = false;
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

  // private hasRepeatedChar(): boolean {
  //   var isRepeated = this.c1.length === 1 && this.c2.length === 1 ? this.c1 === this.c2 : false;
  //   isRepeated = isRepeated || (this.c1.length === 1 && this.c3.length === 1 ? this.c1 === this.c3 : false);
  //   isRepeated = isRepeated || (this.c1.length === 1 && this.c4.length === 1 ? this.c1 === this.c4 : false);
  //   isRepeated = isRepeated || (this.c2.length === 1 && this.c3.length === 1 ? this.c2 === this.c3 : false);
  //   isRepeated = isRepeated || (this.c2.length === 1 && this.c4.length === 1 ? this.c2 === this.c4 : false);
  //   isRepeated = isRepeated || (this.c3.length === 1 && this.c4.length === 1 ? this.c3 === this.c4 : false);
  //   return isRepeated;
  // }

  setHolderValue($event, index: number){
    console.log("In setHolderValue", this.inputValue, index);
    if(this.inputValue){
      $event.target.innerText = this.inputValue;
      this.updateWord(this.inputValue, index);
      console.log("In setHolderValue", $event.target.innerText);
      this.inputValueChanged.emit(true);
    }
  }
}
