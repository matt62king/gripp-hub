import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {IconModule, NavigationModule} from 'gwipp';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    NavigationModule,
    IconModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
