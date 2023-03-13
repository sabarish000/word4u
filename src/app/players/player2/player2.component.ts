import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuessModel } from 'src/app/core/models/guess-model';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {
  player1: string;
  player2: string;
  private guessWord: string;
  private actualWord: string = 'HOST';
  private answerLines: GuessModel[] = [];
  private correctGuess = false;
  private counter: number;
  private timeInText: string ;
  private timeInterval: number = 2;
  private MIN = 60;
  letterPadValue: string;
  public isGuessing = true;
  // public classGroup = {
  //   'table-success' : this.answer.isMatched
  // }

  constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
    if (this.route.snapshot.queryParams) {
      this.player1 = this.route.snapshot.queryParams.player1;
      this.player2 = this.route.snapshot.queryParams.player2;
      this.actualWord = this.route.snapshot.queryParams.word;
      this.timeInterval = this.route.snapshot.queryParams.time;
    }
    console.log(this.player1, this.player2)
      this.counter = this.timeInterval * this.MIN;
      this.timeInText = String('0'+Math.floor(this.counter/60)).slice(-2) +':'+String('0'+Math.floor(this.counter%60)).slice(-2);
      console.info("ActualWord", this.actualWord);
      //this.answerLines.push(new GuessModel(1, 'WORD', 4, true));
  }

  ngOnInit() {
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      this.timeInText = String('0'+Math.floor(this.counter/60)).slice(-2) +':'+String('0'+Math.floor(this.counter%60)).slice(-2);
      //console.log(this.counter, this.timeInText, this.timeInText == "00:00")
      if (this.counter === 0 || this.correctGuess) clearInterval(intervalId)
    }, 1000)
  }
  updateMyWord(aWord) {
    console.log("Exising answers", this.answerLines);
    var isExists = this.answerLines.some(answer => answer.word == aWord );
    // this.answerLines.forEach(answer => {
    //   if (answer.word == aWord) {
    //     isExists = true;
    //   }
    // });
    //console.log("find",this.answerLines.find( answerLine => {answerLine.word == aWord }));
    if (aWord && aWord.length === 4 && !isExists) {
      this.guessWord = aWord;
    }else{
      this.guessWord = undefined;
    }
    console.log("GuessWord", this.guessWord);
  }

  checkGuess() {
    if (this.actualWord == this.guessWord) {
      this.correctGuess = true;
      this.answerLines.push(new GuessModel(index, this.guessWord, 4, true));
    } else {
      var index = this.answerLines.length + 1;
      this.answerLines.push(new GuessModel(index, this.guessWord, this.commonService.getMatchedCount(this.actualWord,this.guessWord), this.guessWord === this.actualWord));
      // this.guessWord = undefined;
      console.log("GuessWord list", this.answerLines);
    }
  }

  // getMatchedCount(aWord: string): number {
  //   var count = 0;
  //   for (let i = 0; i < aWord.length; i++) {
  //     if (this.actualWord.indexOf(aWord.charAt(i)) > -1) {
  //       count++
  //     }
  //   }
  //   return count;
  // }

  // showSubmit() : boolean{
  //   return this.guessWord && this.answerLines.find( answerLine => {answerLine.word === this.guessWord }) != undefined;
  // }

  getValueFromLetterPad($event: any){
    this.letterPadValue = $event;
    console.log("In player1",this.letterPadValue);
  }

  clearLetterPadValue(){
    this.letterPadValue = undefined;
    console.log("In clearLetterPadValue", this.letterPadValue);
  }
  ngOnDestroy(){
    this.timeInterval = 0;
  }
}
