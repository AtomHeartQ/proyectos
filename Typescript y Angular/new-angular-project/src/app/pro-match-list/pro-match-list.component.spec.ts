import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMatchListComponent } from './pro-match-list.component';

describe('ProMatchListComponent', () => {
  let component: ProMatchListComponent;
  let fixture: ComponentFixture<ProMatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProMatchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
