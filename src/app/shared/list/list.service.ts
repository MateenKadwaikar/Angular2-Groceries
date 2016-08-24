import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  Response
} from "@angular/http";
import {
  Grocery
} from "./list.model";
import {
  Config
} from "../config";
import {
  Observable
} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class ListService {

  constructor(private _http: Http) {}
  private token : string;

  checkToken() {
    if (sessionStorage != null) {
      return sessionStorage.getItem("access_token")
    } else {
      return null;
    }
  }
  load(): Observable < any > {
    let headers = new Headers();
    this.token = this.checkToken();
    headers.append("Authorization", "Bearer " + this.token);

    return this._http.get(Config.apiUrl + "Groceries", {
        headers: headers
      })
      .map(this.extractData)
      .catch(this.handleErrors);
  }

  post(item: string): Observable < any > {
    let headers = new Headers();
    this.token = this.checkToken();
    headers.append("Authorization", "Bearer " + this.token);
    headers.append("Content-Type", "application/json");

    return this._http.post(
        Config.apiUrl + "Groceries",
        JSON.stringify({
          Name: item
        }), {
          headers: headers
        }
      ).map(this.extractData)
      .catch(this.handleErrors);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("body",body);
    //return;
    return body || [];
  }
  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}