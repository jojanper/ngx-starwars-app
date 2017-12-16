// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

@Component({selector: 'dng-test', template: ''})
class TestComponent { }


describe('Home Component', () => {
  const html = '<dng-home></dng-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [HomeComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should have title', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Welcome to Star Wars UI!');
  });

});
