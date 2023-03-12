import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  exports: [HomeComponent, AboutComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ]
})
export class HomeModule { }
