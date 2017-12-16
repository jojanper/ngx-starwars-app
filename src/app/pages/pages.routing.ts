import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, PlanetsComponent, SpeciesDetailComponent } from './index';
import { RouteManager } from '../router';
import { AppEmptyViewComponent } from '../widgets';


const appRoutes = RouteManager.ROUTES;

/**
 * Application routes.
 */
const routes: Routes = [
    {path: appRoutes['home'].url, component: HomeComponent},
    {path: appRoutes['planets'].url, component: PlanetsComponent},
    {path: appRoutes['species'].url, component: AppEmptyViewComponent, children: [
        {path: appRoutes['species']['children']['detail'].url, component: SpeciesDetailComponent}
    ]},
    {path: '**', redirectTo: '/' + appRoutes['default'].redirect}
];

export const DraalAppRoutes = RouterModule.forRoot(routes, {
    useHash: true
});
