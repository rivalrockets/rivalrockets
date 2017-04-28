import { Component, OnInit } from '@angular/core';

import { Machine } from './machines/machine';
import { MachineService } from './machines/machine.service';
import { User } from './users/user';
import { UserService } from './users/user.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor() { }

    // get all the related items for the big json
    // User
    // Machine
    // Machine Revision

    ngOnInit(): void {
    }
}
