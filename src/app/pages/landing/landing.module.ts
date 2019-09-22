import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {IconModule} from 'gwipp';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
