import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

import { CinebenchR15Result } from './cinebenchr15result';
import { CinebenchR15ResultService } from './cinebenchr15result.service';

@Component({
  selector: 'app-cinebenchr15results',
  templateUrl: './cinebenchr15results.component.html',
  styleUrls: ['./cinebenchr15results.component.css']
})
export class CinebenchR15ResultsComponent implements AfterViewInit {
  displayedColumns = ['username', 'owner', 'system_name', 'timestamp', 'result_date', 'cpu_cb', 'opengl_fps', 'active_revision']

  dataSource = new CinebenchR15ResultsDataSource(this.cinebenchR15ResultService);

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cinebenchR15ResultService: CinebenchR15ResultService,
    private router: Router) { }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export class CinebenchR15ResultsDataSource extends MatTableDataSource<CinebenchR15Result> {
  constructor(private cinebenchR15ResultService: CinebenchR15ResultService) {
    super();
    this.cinebenchR15ResultService.getCinebenchR15Results().subscribe(d => { this.data = d; })
  }
}
