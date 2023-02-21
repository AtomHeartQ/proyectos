import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHelloWorldComponent } from './input-hello-world.component';

describe('InputHelloWorldComponent', () => {
  let component: InputHelloWorldComponent;
  let fixture: ComponentFixture<InputHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHelloWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
