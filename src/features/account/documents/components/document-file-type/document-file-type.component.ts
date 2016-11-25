import {Component, Input} from '@angular/core';

import {InvestorDocumentFile} from '../../../../../models/documents/investorDocumentFile';

@Component({
  selector: 'document-file-type',
  templateUrl: './document-file-type.component.html',
  styleUrls: ['./document-file-type.component.scss']
})
export class DocumentFileTypeComponent {

  @Input()
  file: InvestorDocumentFile;

  backgroundColor: string;
  icon: string;
  label: string;

  ngOnChanges() {
    this.backgroundColor = this.getBackgroundColor();
    this.icon = this.getIcon();
    this.label = this.getLabel();
  }

  private getBackgroundColor() {
    switch (this.file.contentType) {
      case 'application/pdf':
        return '#B94649';
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return '#a4cb8f';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return '#2c5898';
      case 'image/bmp':
      case 'image/png':
      case 'image/gif':
      case 'image/jpeg':
      case 'image/svg+xml':
        return '#9f3c5a';
      default:
        return '#6495ED';
    }
  }

  private getIcon() {
    switch (this.file.contentType) {
      case 'application/pdf':
        return 'fa-file-pdf-o';
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return 'fa-file-excel-o';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'fa-file-word-o';
      case 'image/bmp':
      case 'image/png':
      case 'image/gif':
      case 'image/jpeg':
      case 'image/svg+xml':
        return 'fa-file-image-o';
      default:
        return 'fa-file';
    }
  }

  private getLabel() {
    switch (this.file.contentType) {
      case 'application/pdf':
        return 'PDF';
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return 'Excel';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'Word';
      case 'image/bmp':
      case 'image/png':
      case 'image/gif':
      case 'image/jpeg':
      case 'image/svg+xml':
        return 'Image';
      default:
        return 'File';
    }
  }

}