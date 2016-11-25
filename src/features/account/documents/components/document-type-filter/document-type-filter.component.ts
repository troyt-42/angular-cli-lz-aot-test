import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../models/customization/colors';
import {InvestorDocumentType} from '../../../../../models/documentTypes/investorDocumentType';
import {
  DocumentTypes,
  getTotalNumberOfUnreadFiles,
  getTotalNumberOfUnreadFilesByDocumentType
} from '../../../../../models/documentTypes/documentTypes';
import {DocumentTypesActions} from '../../../../../state/documentTypes/documentTypes.actions';
import {DarkenColorPipe} from '../../../../../pipes/darkenColor.pipe';

@Component({
  selector: 'document-type-filter',
  templateUrl: './document-type-filter.component.html',
  styleUrls: ['./document-type-filter.component.scss']
})
export class DocumentTypeFilterComponent {

  @Input()
  documentTypes: DocumentTypes;

  @Input()
  colors: Colors;

  totalNumberOfUnreadFiles: number;
  iconTextColor: string;
  showDocumentTypes: boolean;

  private darkenColorPipe = new DarkenColorPipe();

  constructor(private documentTypesActions: DocumentTypesActions) {

  }

  ngOnChanges() {
    this.totalNumberOfUnreadFiles = getTotalNumberOfUnreadFiles(this.documentTypes);
    this.iconTextColor = this.getIconTextColor();
  }

  private getIconTextColor() {
    return this.totalNumberOfUnreadFiles === 0 ?
      this.darkenColorPipe.transform(this.colors.primary, 20) :
      this.colors.primaryText;
  }

  toggleShowDocumentTypes() {
    this.showDocumentTypes = !this.showDocumentTypes;
  }

  getNumberOfUnreadDocumentsForDocumentType(documentType: InvestorDocumentType) {
    return getTotalNumberOfUnreadFilesByDocumentType(this.documentTypes, documentType.code);
  }

  isDocumentTypeSelected(documentType: InvestorDocumentType) {
    return this.documentTypes.selectedCode === documentType.code;
  }

  areNoDocumentTypesSelected() {
    return !this.documentTypes.selectedCode;
  }

  selectDocumentType(documentType: InvestorDocumentType) {
    if (this.documentTypes.selectedCode !== documentType.code) {
      this.documentTypesActions.setDocumentType(documentType.code);
    }

    this.showDocumentTypes = false;
  }

  selectAllDocumentTypes() {
    if (this.documentTypes.selectedCode) {
      this.documentTypesActions.unsetDocumentType();
    }

    this.showDocumentTypes = false;
  }

}