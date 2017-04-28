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
import { Cinebenchr15resultsComponent } from './cinebenchr15results/cinebenchr15results.component';
import { Futuremark3dmark06resultsComponent } from './futuremark3dmark06results/futuremark3dmark06results.component';
import { Futuremark3dmarkResultsComponent } from './futuremark3dmarkresults/futuremark3dmarkresults.component';

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
    Cinebenchr15resultsComponent,
    Futuremark3dmark06resultsComponent,
    Futuremark3dmarkResultsComponent
  ],
  providers: [ MachineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
