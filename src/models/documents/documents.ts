import {Loadable} from '../loadable';
import {InvestorDocument} from './investorDocument';
import {DocumentsSortProperties} from './documentsSortProperties';
import {DocumentsView} from './documentsView';
import {InvestorDocumentFile} from './investorDocumentFile';

export interface Documents extends Loadable {
  readonly view: string;
  readonly sortProperty: string;
  readonly resultsPerPage: number;
  readonly currentPage: number;
  readonly list: Array<InvestorDocument>;
}

export function createDefaultDocuments(): Documents {
  return {
    isLoading: false,
    isReceived: false,
    error: null,
    view: DocumentsView.Rows,
    sortProperty: DocumentsSortProperties.Date,
    resultsPerPage: 5,
    currentPage: 1,
    list: []
  };
}

function getAllInvestorDocumentsByType(
  documents: Documents, documentTypeCode: string
): Array<InvestorDocument> {
  return documents.list.filter(
    document => documentTypeCode ? document.documentTypeCode === documentTypeCode : true
  );
}

export function getAllInvestorDocumentFilesByType(
  documents: Documents, documentTypeCode: string
): Array<InvestorDocumentFile> {
  return getAllInvestorDocumentsByType(documents, documentTypeCode)
    .reduce((files, document) => files.concat(document.files), []);
}

export function isDocumentsViewedAs(documents: Documents, documentsView: string): boolean {
  return documents.view && documents.view === documentsView;
}

export function isDocumentsViewedAsRows(documents: Documents): boolean {
  return isDocumentsViewedAs(documents, DocumentsView.Rows);
}

export function isDocumentsViewedAsGrid(documents: Documents): boolean {
  return isDocumentsViewedAs(documents, DocumentsView.Grid);
}