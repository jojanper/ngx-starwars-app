import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsApiService } from './api/api.service';
import { AlertService } from './alert/alert.service';
import { AppEventsService } from './events/appevent.service';
import { NetworkService } from './network/network.service';


@NgModule({
    imports: [CommonModule]
})
export class DraalServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DraalServicesModule,
            providers: [AppEventsService, AlertService, StarWarsApiService, NetworkService]
        };
    }
}
