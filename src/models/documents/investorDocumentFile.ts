export interface InvestorDocumentFile {
  readonly id: string;
  readonly documentType: string;
  readonly documentStatus: string;
  readonly read: boolean;
  readonly contentType: string;
  readonly contentLength: number;
  readonly creationDate: number;
  readonly fileName: string;
  readonly location: string;
  readonly lastUpdateDate: number;
  readonly metadata: any;
}