import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardCounterComponent } from './keyboard-counter.component';

describe('KeyboardCounterComponent', () => {
  let component: KeyboardCounterComponent;
  let fixture: ComponentFixture<KeyboardCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
