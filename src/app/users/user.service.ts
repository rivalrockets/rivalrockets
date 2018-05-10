import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';
import { environment } from '../../environments/environment';

export interface Users {
    users: User[];
}

@Injectable()
export class UserService {

    private usersUrl = environment.webapiRoot + 'users'

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<Users>(this.usersUrl)
            .map(d => d.users);
    }
}
