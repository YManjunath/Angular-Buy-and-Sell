import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingPageComponent } from './edit-listing-page.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Component } from '@angular/core';

@Component({
  selector: 'app-listing-data-form',
  template: ''
})
class mockListingDataFormComponent {}

describe('EditListingPageComponent', () => {
  let component: EditListingPageComponent;
  let fixture: ComponentFixture<EditListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListingPageComponent,mockListingDataFormComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
