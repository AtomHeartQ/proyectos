import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsDetailPageComponent } from './locations-detail-page.component';

describe('LocationsDetailPageComponent', () => {
  let component: LocationsDetailPageComponent;
  let fixture: ComponentFixture<LocationsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
