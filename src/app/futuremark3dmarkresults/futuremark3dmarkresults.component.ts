import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

import { Futuremark3dMarkResult } from './futuremark3dmarkresult';
import { Futuremark3dMarkResultService } from './futuremark3dmarkresult.service';

@Component({
  selector: 'app-futuremark3dmarkresults',
  templateUrl: './futuremark3dmarkresults.component.html',
  styleUrls: ['./futuremark3dmarkresults.component.css']
})
export class Futuremark3dMarkResultsComponent implements AfterViewInit {
  displayedColumns = ['username', 'owner', 'system_name', 'active_revision', 'timestamp',
  'result_date', 'icestorm_score', 'cloudgate_score', 'firestrike_score', 'skydiver_score', 'overall_result_url'];

  dataSource = new Futuremark3dMarkResultsDataSource(this.futuremark3dMarkResultService);

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private futuremark3dMarkResultService: Futuremark3dMarkResultService,
    private router: Router) { }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
  }
}

export class Futuremark3dMarkResultsDataSource extends MatTableDataSource<Futuremark3dMarkResult> {
  constructor(private futuremark3dMarkResultService: Futuremark3dMarkResultService) {
    super();
    this.futuremark3dMarkResultService.getFuturemark3dMarkResults().subscribe(d => { this.data = d; })
  }
}
