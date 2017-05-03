import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { MachinesComponent } from './machines/machines.component';
import { MachineDetailComponent } from './machines/machine-detail.component';
import { MachineService } from './machines/machine.service';
import { RevisionsComponent } from './revisions/revisions.component';
import { RevisionService } from './revisions/revision.service';
import { CinebenchR15ResultsComponent } from './cinebenchr15results/cinebenchr15results.component';
import { CinebenchR15ResultService } from './cinebenchr15results/cinebenchr15result.service';
import { Futuremark3dMark06ResultsComponent } from './futuremark3dmark06results/futuremark3dmark06results.component';
import { Futuremark3dMark06ResultService } from './futuremark3dmark06results/futuremark3dmark06result.service';
import { Futuremark3dMarkResultsComponent } from './futuremark3dmarkresults/futuremark3dmarkresults.component';
import { Futuremark3dMarkResultService } from './futuremark3dmarkresults/futuremark3dmarkresult.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    MachinesComponent,
    MachineDetailComponent,
    RevisionsComponent,
    CinebenchR15ResultsComponent,
    Futuremark3dMark06ResultsComponent,
    Futuremark3dMarkResultsComponent
  ],
  providers: [ 
    MachineService,
    RevisionService,
    CinebenchR15ResultService,
    Futuremark3dMark06ResultService,
    Futuremark3dMarkResultService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
