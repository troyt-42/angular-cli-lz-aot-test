import {InvestorDocumentFile} from './investorDocumentFile';

export interface InvestorDocument {
  readonly id: string;
  readonly description: string;
  readonly documentStatus: string;
  readonly documentTypeCode: string;
  readonly creationDate: number;
  readonly lastUpdateDate: number;
  readonly link: string;
  readonly location: string;
  readonly metadata: any;
  readonly owner: string;
  readonly files: Array<InvestorDocumentFile>;
}

export function getNumberOfUnreadFiles(document: InvestorDocument) {
  return document.files.reduce(
    (numberOfUnreadFiles, file) => numberOfUnreadFiles + (file.read ? 0 : 1),
    0
  );
}