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
import { CinebenchR15ResultsComponent } from
    './cinebenchr15results/cinebenchr15results.component';
import { Futuremark3dMark06ResultsComponent } from
    './futuremark3dmark06results/futuremark3dmark06results.component';
import { Futuremark3dMarkResultsComponent } from
    './futuremark3dmarkresults/futuremark3dmarkresults.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'machines', component: MachinesComponent },
    { path: 'machines/:id', component: MachineDetailComponent },
    { path: 'revisions', component: RevisionsComponent },
    { path: 'cinebenchr15results', component: CinebenchR15ResultsComponent },
    { path: 'futuremark3dmark06results', component: Futuremark3dMark06ResultsComponent },
    { path: 'futuremark3dmarkresults', component: Futuremark3dMarkResultsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
