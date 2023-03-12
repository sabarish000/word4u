import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  public player1: string;
  public player2: string;
  private myWord: "";
  public timer: number = 5;
  letterPadValue : string = undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.player1 = this.route.snapshot.queryParams.player1;
    this.player2 = this.route.snapshot.queryParams.player2;
    console.log(this.player1, this.player2)
  }
  updateMyWord(word){
    this.myWord = word;
    console.log("Player1 MYword",this.myWord);
  }

  getValueFromLetterPad($event: any){
    this.letterPadValue = $event;
    console.log("In player1",this.letterPadValue);
  }

  clearLetterPadValue(){
    this.letterPadValue = undefined;
    console.log("In clearLetterPadValue", this.letterPadValue);
  }
}
