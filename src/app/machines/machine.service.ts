import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Machine } from './machine';
import { environment } from '../../environments/environment';

@Injectable()
export class MachineService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private machinesUrl = environment.webapiRoot + 'machines';
    //private machinesUrl = 'api/machines';

    constructor(private http: Http) { }

    getMachines(): Observable<Machine[]> {
        return this.http.get(this.machinesUrl).map(this.extractData);
    }

    getMachine(id: number): Observable<Machine> {
        const url = `${this.machinesUrl}/${id}`;
        return this.http.get(url).map(this.extractDataSingle);
    }

    create(name: string): Observable<Machine> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.machinesUrl, JSON.stringify({system_name: name}), options)
            .map(this.extractDataSingle)
            .catch(this.handleError);
    }

    update(machine: Machine): Observable<Machine> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.machinesUrl}/${machine.id}`;
        return this.http.put(url, machine, options)
            .map(this.extractDataSingle)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.machines || {};
    }

    private extractDataSingle(res: Response) {
        let body = res.json();
        return body.machine || {};
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