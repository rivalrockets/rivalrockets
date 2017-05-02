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
import { Futuremark3dMarkResultsComponent } from './futuremark3dmarkresults/futuremark3dmarkresults.component';

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
  providers: [ MachineService, RevisionService, CinebenchR15ResultService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
