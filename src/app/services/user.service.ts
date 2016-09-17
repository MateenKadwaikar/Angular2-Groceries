import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    Response
} from '@angular/http';
import {
    Config
} from '../shared/config';
import {
    Observable
} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {
    User
} from '../user/user.model';


@Injectable()
export class UserService {

    private header: Headers;

    headers(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return headers;
    }
    constructor(private _http: Http) {}
        ///
    register(user: User) {
        this.header = this.headers();
        return this._http.post(
                Config.apiUrl + 'Users',

                JSON.stringify({
                    Username: user.email,
                    Email: user.email,
                    Password: user.password
                }), {
                    headers: this.header
                }
            ).map(this.extractData)
            .catch(this.handleErrors);
    }


    ///Login a user.
    login(user: User) {
        this.header = this.headers();
        return this._http.post(
                Config.apiUrl + 'oauth/token',

                JSON.stringify({
                    username: user.email,
                    password: user.password,
                    grant_type: 'password'
                }), {
                    headers: this.header
                }

            ).map(this.extractData)
            .do(data => {
                sessionStorage.setItem('access_token', data.access_token);
            })
    }

    private extractData(res: Response) {
        let body = res.json().Result;
        return body || [];
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }

}