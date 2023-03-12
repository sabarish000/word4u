import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { Player1Component } from './players/player1/player1.component';
import { Player2Component } from './players/player2/player2.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'player1', component: Player1Component
  },
  {
    path: 'player1/player2', component: Player2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
