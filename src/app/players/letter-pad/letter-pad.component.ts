import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-letter-pad',
  templateUrl: './letter-pad.component.html',
  styleUrls: ['./letter-pad.component.css']
})
export class LetterPadComponent implements OnInit {
  public alphabets: string[]=['A','B','C','D','E','F','G','H','I','J','K','L','M',
                              'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  public selectedAlphs = new Array(26);
  private counter = 0;
  @Input()
  private selectedValue: string;
  private erase = false;
  @Output() value = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log("Letter Pad ngOnIt");
  }

  onClick(event) {
    this.selectedValue = event.target.innerText;
    var index = this.alphabets.indexOf(this.selectedValue)
    if(!this.erase){
      if (!this.wasClicked(index) && this.counter < 4) {
        this.selectedAlphs[index] = this.selectedValue;
        this.counter++;
        console.log("Selected alphs", this.selectedAlphs, this.selectedAlphs[index], this.counter);
        this.value.emit(this.selectedValue);
      }
    }else if(this.counter > 0 && this.selectedAlphs[index]){
      this.selectedAlphs[index] = undefined;
      this.counter--;
      console.log("Selected alphs", this.selectedAlphs, this.selectedAlphs[index], this.counter);
    }
  }

  toggleErase(){
    this.erase = !this.erase;
    console.log("erase toggled", this.erase);
  }

  wasClicked(index : number){
    return this.selectedAlphs[index]
  }
}
