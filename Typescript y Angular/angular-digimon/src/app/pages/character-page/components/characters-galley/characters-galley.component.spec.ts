import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGalleyComponent } from './characters-galley.component';

describe('CharactersGalleyComponent', () => {
  let component: CharactersGalleyComponent;
  let fixture: ComponentFixture<CharactersGalleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersGalleyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersGalleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
