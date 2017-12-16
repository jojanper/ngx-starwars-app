import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DraalServicesModule, StarWarsApiService } from '../services';
import { AppComponent } from './app.component';
import { DraalAlertModule } from '../widgets';
import { DraalAppHeaderComponent } from '../pages';


describe('App Component', () => {

  const mockStarWarsApi = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DraalAlertModule.forRoot(), DraalServicesModule.forRoot()],
      declarations: [DraalAppHeaderComponent, AppComponent],
      providers: [
        provideRoutes([]),
        {provide: StarWarsApiService, useValue: mockStarWarsApi}
      ]
    });
  });

  it('should have an url', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/jojanper/ngx-starwars-app');
  });

});
