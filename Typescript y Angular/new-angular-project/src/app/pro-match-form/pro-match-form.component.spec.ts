import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMatchFormComponent } from './pro-match-form.component';

describe('ProMatchFormComponent', () => {
  let component: ProMatchFormComponent;
  let fixture: ComponentFixture<ProMatchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProMatchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProMatchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
