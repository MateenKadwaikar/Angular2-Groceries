import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    Response
} from "@angular/http";
import {
    Config
} from "../config";
import {
    Observable
} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {
    User
} from "./user.model";


@Injectable()
export class UserService {
    constructor(private _http: Http) {}

    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });


    ///
    register(user: User) {
        return this._http.post(
                Config.apiUrl + "Users",

                JSON.stringify({
                    Username: user.email,
                    Email: user.email,
                    Password: user.password
                }), {
                    headers: this.headers
                }
            ).map(this.extractData)
            .catch(this.handleErrors);
    }


    ///Login a user.
    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.post(
                Config.apiUrl + "oauth/token",

                JSON.stringify({
                    username: user.email,
                    password: user.password,
                    grant_type: "password"
                }), {
                    headers: headers
                }

            ).map(this.extractData)
            // .do(data => {
            //  Config.token = data.Result.access_token;
            // })
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }

}