import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  Response
} from '@angular/http';
import {
  Observable
} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {
  Grocery
} from '../list/list.model';
import {
  Config
} from '../shared/config';


@Injectable()
export class ListService {

  private token: string;
  private header: Headers;

  constructor(private _http: Http) {}

  checkToken() {
    if (sessionStorage != null) {
      return sessionStorage.getItem('access_token');
    } else {
      return null;
    }
  }

  headers(): Headers {
    let headers = new Headers();
    this.token = this.checkToken();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    return headers;
  }

  load(): Observable < any > {
    this.header = this.headers();
    return this._http.get(Config.apiUrl + 'Groceries', {
        headers: this.header
      })
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  post(item: string): Observable < any > {
    this.header = this.headers();
    return this._http.post(
        Config.apiUrl + 'Groceries',
        JSON.stringify({
          Name: item
        }), {
          headers: this.header
        }
      ).map(this.extractData)
      .catch(this.handleErrors);
  }

  private extractData(res: Response) {
    let body = < Grocery[] > res.json().Result;
    return body || [];
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }

}