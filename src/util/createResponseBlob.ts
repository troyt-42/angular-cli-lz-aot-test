import {Response} from '@angular/http';

export function createResponseBlob(response: Response, contentType: string): Blob {
  return new Blob([response.blob()], {
    type: contentType
  });
}