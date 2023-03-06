import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDigimonComponent } from './add-digimon.component';

describe('AddDigimonComponent', () => {
  let component: AddDigimonComponent;
  let fixture: ComponentFixture<AddDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDigimonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
