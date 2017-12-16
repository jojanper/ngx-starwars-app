import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent, DraalAppHeaderComponent,
    DraalAppRoutes, PlanetsComponent, SpeciesDetailComponent } from './index';
import { DraalAlertModule, AlertComponent, DraalWidgetsCoreModule } from '../widgets';
import { DraalServicesModule } from '../services';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),

        DraalAppRoutes,
        DraalAlertModule.forRoot(),
        DraalWidgetsCoreModule.forRoot(),

        DraalServicesModule.forRoot()
    ],
    declarations: [DraalAppHeaderComponent, HomeComponent, PlanetsComponent, SpeciesDetailComponent],
    exports: [DraalAppHeaderComponent, AlertComponent]
})
export class DraalAppPagesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DraalAppPagesModule
        };
    }
}
