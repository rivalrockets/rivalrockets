import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

import { Revision } from './revision';
import { RevisionService } from './revision.service';

@Component({
  selector: 'app-revisions',
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.css'],
})
export class RevisionsComponent implements AfterViewInit {
  displayedColumns = ['username', 'owner', 'system_name', 'active_revision', 'timestamp',
    'cpu_make', 'cpu_name', 'cpu_socket', 'cpu_mhz', 'cpu_proc_cores', 'chipset', 'system_memory_gb',
    'system_memory_mhz', 'gpu_name', 'gpu_make', 'gpu_memory_gb', 'revision_notes', 'pcpartpicker_url'];

  dataSource = new RevisionsDataSource(this.revisionService);

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private revisionService: RevisionService,
    private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export class RevisionsDataSource extends MatTableDataSource<Revision> {
  constructor(private revisionService: RevisionService) {
    super();
    this.revisionService.getRevisions().subscribe(d => { this.data = d; })
  }
}
