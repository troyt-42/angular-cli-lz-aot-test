import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LocaleModule} from '../../../components/locale/locale.module';
import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../pipes/commonPipes.module';

import {
  TableOfContentsComponent,
  TableOfContentsContainerComponent,
  TableOfContentsItemComponent,
  TableOfContentsItemLabelComponent,
  TableOfContentsItemStepsComponent
} from './components';

import {ProfileActions} from '../../../state/profile/profile.actions';

@NgModule({
  imports: [
    LocaleModule,
    CommonModule,
    CommonComponentsModule,
    CommonPipesModule,
    RouterModule
  ],
  declarations: [
    TableOfContentsComponent,
    TableOfContentsContainerComponent,
    TableOfContentsItemComponent,
    TableOfContentsItemLabelComponent,
    TableOfContentsItemStepsComponent
  ],
  providers: [
    ProfileActions
  ]
})
export class TableOfContentsModule { }
