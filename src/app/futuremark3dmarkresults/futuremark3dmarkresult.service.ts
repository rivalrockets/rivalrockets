import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Futuremark3dMarkResult } from './futuremark3dmarkresult';
import { environment } from '../../environments/environment';

@Injectable()
export class Futuremark3dMarkResultService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private futuremark3dMarkResultsUrl = environment.webapiRoot + 'futuremark3dmarkresults';

  constructor(private http: Http) { }

  getFuturemark3dMarkResults(): Observable<Futuremark3dMarkResult[]> {
    return this.http.get(this.futuremark3dMarkResultsUrl).map(this.extractData);
  }

  getFuturemark3dMarkResult(id: number): Observable<Futuremark3dMarkResult> {
    const url = `${this.futuremark3dMarkResultsUrl}/${id}`;
    return this.http.get(url).map(this.extractDataSingle);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.futuremark3dmarkresults || {};
  }

  private extractDataSingle(res: Response) {
    let body = res.json();
    return body.futuremark3dmarkresult || {};
  }
}