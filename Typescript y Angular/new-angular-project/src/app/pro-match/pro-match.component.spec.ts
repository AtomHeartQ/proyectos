import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMatchComponent } from './pro-match.component';

describe('ProMatchComponent', () => {
  let component: ProMatchComponent;
  let fixture: ComponentFixture<ProMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
