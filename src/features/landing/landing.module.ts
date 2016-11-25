import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LocaleModule} from '../../components/locale/locale.module';
import {CommonComponentsModule} from '../../components/commonComponents.module';
import {HomeModule} from './home/home.module';

import {LandingComponent} from './landing.component';
import {landingRoutes} from './landing.routing';

@NgModule({
  imports: [
    CommonModule,
    // CommonComponentsModule,
    // LocaleModule,
    HomeModule,
    RouterModule.forChild(landingRoutes)
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
