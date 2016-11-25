import {Component, Input} from '@angular/core';

import {Colors} from '../../../../../models/customization/colors';
import {LightenColorPipe} from '../../../../../pipes/lightenColor.pipe';
import {InvestorDocumentFile} from '../../../../../models/documents/investorDocumentFile';
import {DocumentsView} from '../../../../../models/documents/documentsView';
import {DocumentsService} from '../../services/documents.service';

@Component({
  selector: 'document-file',
  templateUrl: './document-file.component.html',
  styleUrls: ['./document-file.component.scss']
})
export class DocumentComponent {

  @Input()
  file: InvestorDocumentFile;

  @Input()
  colors: Colors;

  @Input()
  type: string;

  isUnread: boolean;
  sharedDate: Date;
  headerColor: string;
  backgroundColor: string;
  borderColor: string;
  isGrid: boolean;

  lightenColorPipe = new LightenColorPipe();

  constructor(private documentsService: DocumentsService) {

  }

  ngOnChanges() {
    this.isUnread = !this.file.read;
    this.sharedDate = new Date(this.file.creationDate);
    this.headerColor = this.isUnread ? this.colors.primary : this.colors.contentText;
    this.backgroundColor = this.isUnread ? 'white' : this.colors.contentBackground;
    this.borderColor = this.lightenColorPipe.transform(this.colors.contentText, 50);
    this.isGrid = this.type === DocumentsView.Grid;
  }

  downloadFile() {
    this.documentsService.downloadFile(this.file);
  }

}
