import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CinebenchR15Result } from './cinebenchr15result';
import { environment } from '../../environments/environment';


export interface CinebenchR15Results {
  cinebenchr15results: CinebenchR15Result[];
}

@Injectable()
export class CinebenchR15ResultService {

  private cinebenchR15ResultsUrl = environment.webapiRoot + 'cinebenchr15results';

  constructor(private http: HttpClient) { }

  getCinebenchR15Results(): Observable<CinebenchR15Result[]> {
    return this.http.get<CinebenchR15Results>(this.cinebenchR15ResultsUrl)
      .map(d => d.cinebenchr15results);
  }
}
