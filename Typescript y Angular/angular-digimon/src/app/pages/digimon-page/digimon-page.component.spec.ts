import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonPageComponent } from './digimon-page.component';

describe('DigimonPageComponent', () => {
  let component: DigimonPageComponent;
  let fixture: ComponentFixture<DigimonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
