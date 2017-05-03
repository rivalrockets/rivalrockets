import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Futuremark3dMark06Result } from './futuremark3dmark06result';
import { Futuremark3dMark06ResultService } from './futuremark3dmark06result.service';

@Component({
  selector: 'app-futuremark3dmark06results',
  templateUrl: './futuremark3dmark06results.component.html',
  styleUrls: ['./futuremark3dmark06results.component.css']
})
export class Futuremark3dMark06ResultsComponent implements OnInit {
  errorMessage: string;
  futuremark3dMark06Results: Futuremark3dMark06Result[];

  constructor(
    private futuremark3dMark06ResultService: Futuremark3dMark06ResultService,
    private router: Router) { }

    getFuturemark3dMark06Results(): void {
        this.futuremark3dMark06ResultService.getFuturemark3dMark06Results()
                            .subscribe(
                                futuremark3dMark06Results => this.futuremark3dMark06Results = futuremark3dMark06Results,
                                error => this.errorMessage = <any>error);
    }

  ngOnInit() {
    this.getFuturemark3dMark06Results();
  }
}
