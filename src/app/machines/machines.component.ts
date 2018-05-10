import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Machine } from './machine';
import { MachineService } from './machine.service';

@Component({
    selector: 'machines',
    templateUrl: './machines.component.html',
    providers: [ MachineService ]
})
export class MachinesComponent implements OnInit {
    errorMessage: string;
    machines: Machine[];
    selectedMachine: Machine;

    constructor(
        private machineService: MachineService,
        private router: Router) { }

    getMachines(): void {
        this.machineService.getMachines()
                            .subscribe(
                                machines => this.machines = machines,
                                error => this.errorMessage = <any>error);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return ; }
        // this.machineService.create(name).subscribe(machine => {
        //     this.machines.push(machine);
        //     this.selectedMachine = null;
        // })
    }

    ngOnInit(): void {
        this.getMachines();
    }
}
