import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

import { Futuremark3dMark06Result } from './futuremark3dmark06result';
import { Futuremark3dMark06ResultService } from './futuremark3dmark06result.service';

@Component({
  selector: 'app-futuremark3dmark06results',
  templateUrl: './futuremark3dmark06results.component.html',
  styleUrls: ['./futuremark3dmark06results.component.css']
})
export class Futuremark3dMark06ResultsComponent implements AfterViewInit {
  displayedColumns = ['username', 'owner', 'system_name', 'active_revision', 'timestamp',
  'result_date', 'sm2_score', 'cpu_score', 'sm3_score', 'proxcyon_fps', 'fireflyforest_fps',
  'cpu1_fps', 'cpu2_fps', 'canyonflight_fps', 'deepfreeze_fps', 'overall_score'];

  dataSource = new Futuremark3dMark06ResultsDataSource(this.futuremark3dMark06ResultService);

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private futuremark3dMark06ResultService: Futuremark3dMark06ResultService,
    private router: Router) { }

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
  }
}

export class Futuremark3dMark06ResultsDataSource extends MatTableDataSource<Futuremark3dMark06Result> {
  constructor(private futuremark3dMark06ResultService: Futuremark3dMark06ResultService) {
    super();
    this.futuremark3dMark06ResultService.getFuturemark3dMark06Results().subscribe(d => { this.data = d; })
  }
}
