import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [ UserService ]
})
export class UsersComponent implements OnInit {
    errorMessage: string;
    users: User[];
    selectedUser: User;

    constructor(
        private userService: UserService,
        private router: Router) { }

    getUsers(): void {
        this.userService.getUsers()
                    .subscribe(
                        users => this.users = users,
                        error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getUsers();
    }
}
