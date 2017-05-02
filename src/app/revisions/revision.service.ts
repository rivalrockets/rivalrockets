import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Revision } from './revision';
import { environment } from '../../environments/environment';

@Injectable()
export class RevisionService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private revisionsUrl = environment.webapiRoot + 'revisions';
    //private revisionsUrl = 'api/revisions';

    constructor(private http: Http) { }

    getRevisions(): Observable<Revision[]> {
        return this.http.get(this.revisionsUrl).map(this.extractData);
    }

    getRevision(id: number): Observable<Revision> {
        const url = `${this.revisionsUrl}/${id}`;
        return this.http.get(url).map(this.extractDataSingle);
    }

    create(name: string): Observable<Revision> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.revisionsUrl, JSON.stringify({system_name: name}), options)
            .map(this.extractDataSingle)
            .catch(this.handleError);
    }

    update(revision: Revision): Observable<Revision> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.revisionsUrl}/${revision.id}`;
        return this.http.put(url, revision, options)
            .map(this.extractDataSingle)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.revisions || {};
    }

    private extractDataSingle(res: Response) {
        let body = res.json();
        return body.revision || {};
    }


    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}