import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Revision } from './revision';
import { RevisionService } from './revision.service';

@Component({
    selector: 'revisions',
    templateUrl: './revisions.component.html',
    providers: [ RevisionService ]
})
export class RevisionsComponent implements OnInit {
    errorMessage: string;
    revisions: Revision[];
    selectedRevision: Revision;

    constructor(
        private revisionService: RevisionService,
        private router: Router) { }

    getRevisions(): void {
        this.revisionService.getRevisions()
                            .subscribe(
                                revisions => this.revisions = revisions,
                                error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getRevisions();
    }
}
