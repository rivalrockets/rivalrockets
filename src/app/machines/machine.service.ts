import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Machine } from './machine';
import { environment } from '../../environments/environment';

export interface Machines {
    machines: Machine[];
}

@Injectable()
export class MachineService {

    private machinesUrl = environment.webapiRoot + 'machines';

    constructor(private http: HttpClient) { }

    getMachines(): Observable<Machine[]> {
        return this.http.get<Machines>(this.machinesUrl)
            .map(d => d.machines);
    }

    getMachine(id: number): Observable<Machine> {
        const url = `${this.machinesUrl}/${id}`;
        return this.http.get<Machine>(url);
    }

}
