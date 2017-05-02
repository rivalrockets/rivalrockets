import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { CinebenchR15Result } from './cinebenchr15result';
import { environment } from '../../environments/environment';

@Injectable()
export class CinebenchR15ResultService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private cinebenchR15ResultsUrl = environment.webapiRoot + 'cinebenchr15results';

  constructor(private http: Http) { }

  getCinebenchR15Results(): Observable<CinebenchR15Result[]> {
    return this.http.get(this.cinebenchR15ResultsUrl).map(this.extractData);
  }

  getCinebenchR15Result(id: number): Observable<CinebenchR15Result> {
    const url = `${this.cinebenchR15ResultsUrl}/${id}`;
    return this.http.get(url).map(this.extractDataSingle);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.cinebenchr15results || {};
  }

  private extractDataSingle(res: Response) {
    let body = res.json();
    return body.cinebenchr15result || {};
  }
}
