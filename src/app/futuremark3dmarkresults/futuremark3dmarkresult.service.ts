import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Futuremark3dMarkResult } from './futuremark3dmarkresult';
import { environment } from '../../environments/environment';

export interface Futuremark3dMarkResults {
  futuremark3dmarkresults: Futuremark3dMarkResult[];
}

@Injectable()
export class Futuremark3dMarkResultService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private futuremark3dMarkResultsUrl = environment.webapiRoot + 'futuremark3dmarkresults';

  constructor(private http: HttpClient) { }

  getFuturemark3dMarkResults(): Observable<Futuremark3dMarkResult[]> {
    return this.http.get<Futuremark3dMarkResults>(this.futuremark3dMarkResultsUrl)
      .map(d => d.futuremark3dmarkresults);
  }
}
