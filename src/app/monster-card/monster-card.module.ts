import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterCardComponent } from './monster-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MonsterCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class MonsterCardModule { }
