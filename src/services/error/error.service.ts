import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

@Injectable()
export class ErrorService {

  createErrorFromResponse(error: Response | any): Error {
    if (error instanceof Response) {
      const body = error.json() || '';
      if (body.message) {
        return new Error(body.message);
      }
    }
    return new Error();
  }
}
