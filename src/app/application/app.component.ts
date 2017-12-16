import { Component } from '@angular/core';

import { StarWarsApiService } from '../services';

import '../../style/app.scss';

@Component({
    selector: 'dng-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    url = 'https://github.com/jojanper/ngx-starwars-app';
    constructor(protected starwarsApi: StarWarsApiService) {}
}
