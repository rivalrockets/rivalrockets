import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Dashboard
import { DashboardComponent } from './dashboard.component';
// Users
import { UsersComponent } from './users/users.component';
// Machines
import { MachinesComponent } from './machines/machines.component';
import { MachineDetailComponent } from './machines/machine-detail.component';
// Revisions
import { RevisionsComponent } from './revisions/revisions.component';
// Benchmarks
import { Cinebenchr15resultsComponent } from
    './cinebenchr15results/cinebenchr15results.component';
import { Futuremark3dmark06resultsComponent } from
    './futuremark3dmark06results/futuremark3dmark06results.component';
import { Futuremark3dmarkResultsComponent } from
    './futuremark3dmarkresults/futuremark3dmarkresults.component';
// Results

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'machines', component: MachinesComponent },
    { path: 'machines/:id', component: MachineDetailComponent },
    { path: 'revisions', component: RevisionsComponent },
    { path: 'cinebenchr15results', component: Cinebenchr15resultsComponent },
    { path: 'futuremark3dmark06results', component: Futuremark3dmark06resultsComponent },
    { path: 'futuremark3dmarkresults', component: Futuremark3dmarkResultsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
