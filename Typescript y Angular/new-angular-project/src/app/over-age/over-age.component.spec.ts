import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAgeComponent } from './over-age.component';

describe('OverAgeComponent', () => {
  let component: OverAgeComponent;
  let fixture: ComponentFixture<OverAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
