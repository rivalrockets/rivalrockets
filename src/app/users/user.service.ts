import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private usersUrl = environment.webapiRoot + 'users'

    constructor(private http: Http) { }
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl).map(this.extractData);
    }


    create(user: User): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usersUrl, { name }, options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.users || { };
    }
}
