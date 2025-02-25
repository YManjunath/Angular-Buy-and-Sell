import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDataFormComponent } from './listing-data-form.component';
import { FormsModule} from '@angular/forms'

describe('ListingDataFormComponent', () => {
  let component: ListingDataFormComponent;
  let fixture: ComponentFixture<ListingDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDataFormComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
