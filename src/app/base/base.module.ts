import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarModule} from './nav-bar/nav-bar.module';

@NgModule({
  imports: [
    NavBarModule,
    CommonModule,
  ],
  exports: [
    NavBarModule
  ],
  declarations: []
})
export class BaseModule { }
