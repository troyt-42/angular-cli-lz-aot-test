import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CommonComponentsModule} from '../../../components/commonComponents.module';
import {CommonPipesModule} from '../../../pipes/commonPipes.module';
import {LocaleModule} from '../../../components/locale/locale.module';
import {NavigatorModule} from '../../../components/navigator/navigator.module';

import {
  DocumentComponent,
  DocumentFileTypeComponent,
  DocumentTypeComponent,
  DocumentTypeFilterComponent,
  DocumentTypeFilterIconComponent,
  DocumentsContainerComponent,
  DocumentsListingComponent,
  DocumentsOptionsComponent,
  DocumentsPageComponent,
  DocumentsSortSelectorComponent,
  DocumentsViewToggleComponent,
  MaxResultsSelectorComponent,
  PageNavigationComponent,
  SelectedDocumentTypeComponent
} from './components';

import {DocumentsService} from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonComponentsModule,
    CommonPipesModule,
    NavigatorModule,
    LocaleModule,
    RouterModule
  ],
  declarations: [
    DocumentComponent,
    DocumentFileTypeComponent,
    DocumentTypeComponent,
    DocumentTypeFilterComponent,
    DocumentTypeFilterIconComponent,
    DocumentsContainerComponent,
    DocumentsListingComponent,
    DocumentsOptionsComponent,
    DocumentsPageComponent,
    DocumentsSortSelectorComponent,
    DocumentsViewToggleComponent,
    MaxResultsSelectorComponent,
    PageNavigationComponent,
    SelectedDocumentTypeComponent
  ],
  providers: [
    DocumentsService
  ]
})
export class DocumentsModule {

}
