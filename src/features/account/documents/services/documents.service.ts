import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';

import {IrisService} from '../../../../services/iris/iris.service';
import {InvestorDocumentFile} from '../../../../models/documents/investorDocumentFile';

@Injectable()
export class DocumentsService {

  subscription: Subscription;

  constructor(private irisService: IrisService) {

  }

  downloadFile(file: InvestorDocumentFile) {
    const downloadWindow = window.open('', '_blank');
    downloadWindow.document.write('Loading...');

    this.subscription = this.irisService.getDocumentFileDocument(file)
      .subscribe(
        blob => {
          downloadWindow.location.href = window.URL.createObjectURL(blob);

          this.subscription.unsubscribe();
        },
        error => () => {}
      );
  }

}