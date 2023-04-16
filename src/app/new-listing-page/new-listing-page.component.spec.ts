import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListingPageComponent } from './new-listing-page.component';

@Component({
  selector: 'app-listing-data-form',
  template: ''
})
class mockListingDataFormComponent {}

describe('NewListingPageComponent', () => {
  let component: NewListingPageComponent;
  let fixture: ComponentFixture<NewListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListingPageComponent, mockListingDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
