import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Futuremark3dMark06Result } from './futuremark3dmark06result';
import { environment } from '../../environments/environment';

@Injectable()
export class Futuremark3dMark06ResultService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private futuremark3dMark06ResultsUrl = environment.webapiRoot + 'futuremark3dmark06results';

  constructor(private http: Http) { }

  getFuturemark3dMark06Results(): Observable<Futuremark3dMark06Result[]> {
    return this.http.get(this.futuremark3dMark06ResultsUrl).map(this.extractData);
  }

  getFuturemark3dMark06Result(id: number): Observable<Futuremark3dMark06Result> {
    const url = `${this.futuremark3dMark06ResultsUrl}/${id}`;
    return this.http.get(url).map(this.extractDataSingle);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.futuremark3dmark06results || {};
  }

  private extractDataSingle(res: Response) {
    let body = res.json();
    return body.futuremark3dmark06result || {};
  }
}
