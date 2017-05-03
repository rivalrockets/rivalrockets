import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Futuremark3dMarkResult } from './futuremark3dmarkresult';
import { Futuremark3dMarkResultService } from './futuremark3dmarkresult.service';

@Component({
  selector: 'app-futuremark3dmarkresults',
  templateUrl: './futuremark3dmarkresults.component.html',
  styleUrls: ['./futuremark3dmarkresults.component.css']
})
export class Futuremark3dMarkResultsComponent implements OnInit {
  errorMessage: string;
  futuremark3dMarkResults: Futuremark3dMarkResult[];

  constructor(
    private futuremark3dMarkResultService: Futuremark3dMarkResultService,
    private router: Router) { }

    getFuturemark3dMarkResults(): void {
        this.futuremark3dMarkResultService.getFuturemark3dMarkResults()
                            .subscribe(
                                futuremark3dMarkResults => this.futuremark3dMarkResults = futuremark3dMarkResults,
                                error => this.errorMessage = <any>error);
    }

  ngOnInit() {
    this.getFuturemark3dMarkResults();
  }
}
