import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  NavigatorComponent,
  NavigatorItem
} from './index';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavigatorComponent,
    NavigatorItem
  ],
  exports: [
    NavigatorComponent,
    NavigatorItem
  ]
})
export class NavigatorModule { }
