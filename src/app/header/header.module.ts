import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule,
  ],
  // Notice must also export the actual HeaderComponent to be used in other modules as well
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
