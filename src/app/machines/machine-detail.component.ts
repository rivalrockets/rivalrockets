import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Machine } from '../machines/machine';
import { MachineService } from '../machines/machine.service';

@Component({
    selector: 'machine-detail',
    templateUrl: './machine-detail.component.html',
    styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {
    machine: Machine;

    constructor(
        private machineService: MachineService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.machineService.getMachine(+params['id']))
            .subscribe(machine => this.machine = machine);
    }

    save(): void {
        this.machineService.update(this.machine)
            .subscribe( () => this.goBack() );
    }

    goBack(): void {
        this.location.back();
    }

}
