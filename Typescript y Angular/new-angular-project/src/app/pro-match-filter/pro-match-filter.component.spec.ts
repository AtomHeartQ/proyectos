import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMatchFilterComponent } from './pro-match-filter.component';

describe('ProMatchFilterComponent', () => {
  let component: ProMatchFilterComponent;
  let fixture: ComponentFixture<ProMatchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProMatchFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProMatchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
