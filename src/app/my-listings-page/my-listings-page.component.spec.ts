import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingsPageComponent } from './my-listings-page.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyListingsPageComponent', () => {
  let component: MyListingsPageComponent;
  let fixture: ComponentFixture<MyListingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyListingsPageComponent],
      imports: [RouterModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MyListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
