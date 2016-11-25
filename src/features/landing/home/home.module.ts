import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../components/locale/locale.module';
import {NavigatorModule} from '../../../components/navigator/navigator.module';
import {homeRoutes} from './home.routing';

import {HomeComponent} from './components';

// import {
//   ContentLayoutComponent,
//   LogoComponent,
//   ButtonControlComponent,
// } from '../../../components';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    LocaleModule,
    NavigatorModule,
    // RouterModule
  ],
  declarations: [
    HomeComponent,
    // ContentLayoutComponent,
    // LogoComponent,
    // ButtonControlComponent,
  ],
  providers: [

  ]
})
export class HomeModule {
}
