import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Futuremark3dMark06Result } from './futuremark3dmark06result';
import { environment } from '../../environments/environment';

export interface Futuremark3dMark06Results {
  futuremark3dmark06results: Futuremark3dMark06Result[];
}

@Injectable()
export class Futuremark3dMark06ResultService {

  private futuremark3dMark06ResultsUrl = environment.webapiRoot + 'futuremark3dmark06results';

  constructor(private http: HttpClient) { }

  getFuturemark3dMark06Results(): Observable<Futuremark3dMark06Result[]> {
    return this.http.get<Futuremark3dMark06Results>(this.futuremark3dMark06ResultsUrl)
      .map(d => d.futuremark3dmark06results);
  }
}
