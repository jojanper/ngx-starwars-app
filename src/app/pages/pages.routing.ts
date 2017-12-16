import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent, PlanetsComponent, SpeciesDetailComponent } from './index';
import { RouteManager } from '../router';
import { AppEmptyViewComponent } from '../widgets';


const appRoutes = RouteManager.ROUTES;

/**
 * Application routes, some of the routes are lazy loaded.
 *
 * Reference to lazy loaded pages:
 * https://toddmotto.com/lazy-loading-angular-code-splitting-webpack
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
    useHash: true,

    // Once bootstrapped, fetch all the remaining module chunks
    preloadingStrategy: PreloadAllModules
});
