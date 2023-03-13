import { EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { WordInputComponent } from './word-input/word-input.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LetterPadComponent } from './letter-pad/letter-pad.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule } from '@angular/material';
import { CharInputComponent } from './word-input/char-input/char-input.component';


@NgModule({
  declarations: [Player1Component, Player2Component, WordInputComponent, LetterPadComponent, CharInputComponent],
  exports: [Player1Component, Player2Component,WordInputComponent],
  imports: [
    CommonModule,FormsModule, RouterModule, FlexLayoutModule, MatCardModule, MatIconModule
  ]
})
export class PlayersModule { }
