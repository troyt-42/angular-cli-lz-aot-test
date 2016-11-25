import {IrisCredentials, createDefaultIrisCredentials} from './irisCredentials';

export interface IrisServer {
  readonly url: string;
  readonly tenant: string;
  readonly gateway: string;
  readonly anonymousCredentials: IrisCredentials;
}

export function createDefaultIrisServer(): IrisServer {
  return {
    url: null,
    tenant: null,
    gateway: null,
    anonymousCredentials: createDefaultIrisCredentials()
  };
}