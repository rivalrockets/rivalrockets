import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Revision } from './revision';
import { environment } from '../../environments/environment';

export interface Revisions {
    revisions: Revision[];
}

@Injectable()
export class RevisionService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private revisionsUrl = environment.webapiRoot + 'revisions';

    constructor(private http: HttpClient) { }

    getRevisions(): Observable<Revision[]> {
        return this.http.get<Revisions>(this.revisionsUrl)
            .map(d => d.revisions);
    }

    getRevision(id: number): Observable<Revision> {
        const url = `${this.revisionsUrl}/${id}`;
        return this.http.get<Revision>(url)
    }
}
