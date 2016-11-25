import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {AppStateService} from '../../../../../services/appStateService/appState.service';
import {Authentication} from '../../../../../models/authentication/authentication';
import {Documents} from '../../../../../models/documents/documents';
import {DocumentTypes} from '../../../../../models/documentTypes/documentTypes';
import {Colors} from '../../../../../models/customization/colors';

@Component({
  selector: 'documents-container',
  templateUrl: './documents-container.component.html',
  styleUrls: ['./documents-container.component.scss']
})
export class DocumentsContainerComponent {

  authentication$: Observable<Authentication>;
  documents$: Observable<Documents>;
  documentTypes$: Observable<DocumentTypes>;
  colors$: Observable<Colors>;

  constructor(appStateService: AppStateService) {
    this.authentication$ = appStateService.getAuthentication();
    this.documents$ = appStateService.getDocuments();
    this.documentTypes$ = appStateService.getDocumentTypes();
    this.colors$ = appStateService.getColors();
  }
}