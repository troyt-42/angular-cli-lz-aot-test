import {Loadable} from '../loadable';
import {InvestorDocumentType} from './investorDocumentType';

export interface DocumentTypes extends Loadable {
  selectedCode: string;
  list: Array<InvestorDocumentType>;
}

export function createDefaultDocumentTypes(): DocumentTypes {
  return {
    isLoading: false,
    isReceived: false,
    error: null,
    selectedCode: null,
    list: []
  };
}

function calculateNumberOfUnreadFiles(types: Array<InvestorDocumentType>): number {
  return types.reduce((numberOfUnreadDocuments, type) =>
    numberOfUnreadDocuments + type.numberOfUnreadFiles, 0
  );
}

function filterDocumentTypesByCode(
  documentTypes: Array<InvestorDocumentType>, documentTypeCode: string
): Array<InvestorDocumentType> {
  return documentTypes.filter(type => type.code === documentTypeCode);
}

function findDocumentTypeByCode(documentTypes: DocumentTypes, documentTypeCode: string): InvestorDocumentType {
  return documentTypes.list.find(type => type.code === documentTypeCode);
}

export function getTotalNumberOfUnreadFiles(documentTypes: DocumentTypes): number {
  return calculateNumberOfUnreadFiles(documentTypes.list);
}

export function getTotalNumberOfUnreadFilesByDocumentType(
  documentTypes: DocumentTypes, documentTypeCode: string
): number {
  return calculateNumberOfUnreadFiles(
    filterDocumentTypesByCode(documentTypes.list, documentTypeCode)
  );
}

export function getTotalNumberOfUnreadFilesBySelectedDocumentType(documentTypes: DocumentTypes): number {
  return documentTypes.selectedCode ?
    getTotalNumberOfUnreadFilesByDocumentType(documentTypes, documentTypes.selectedCode) :
    getTotalNumberOfUnreadFiles(documentTypes);
}

export function getSelectedDocumentTypeDescription(documentTypes: DocumentTypes): string {
  if (documentTypes.list.length === 1) {
    return documentTypes.list[0].description;
  } else if (documentTypes.selectedCode) {
    return findDocumentTypeByCode(documentTypes, documentTypes.selectedCode).description;
  } else {
    return 'All';
  }
}