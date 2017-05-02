import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CinebenchR15Result } from './cinebenchr15result';
import { CinebenchR15ResultService } from './cinebenchr15result.service';

@Component({
  selector: 'app-cinebenchr15results',
  templateUrl: './cinebenchr15results.component.html',
  styleUrls: ['./cinebenchr15results.component.css']
})
export class CinebenchR15ResultsComponent implements OnInit {
  errorMessage: string;
  cinebenchR15Results: CinebenchR15Result[];


  constructor(
    private cinebenchR15ResultService: CinebenchR15ResultService,
    private router: Router) { }

    getCinebenchR15Results(): void {
        this.cinebenchR15ResultService.getCinebenchR15Results()
                            .subscribe(
                                cinebenchR15Results => this.cinebenchR15Results = cinebenchR15Results,
                                error => this.errorMessage = <any>error);
    }

  ngOnInit(): void {
    this.getCinebenchR15Results();
  }
}
