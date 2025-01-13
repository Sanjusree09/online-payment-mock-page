import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MockComponent} from './mockComponent/mock-component.component';

export const routes: Routes = [
{path:'dashboard', component:DashboardComponent},
{path:'mockComponent', component:MockComponent}
];
