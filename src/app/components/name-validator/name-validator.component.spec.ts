import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameValidatorComponent } from './name-validator.component';

describe('NameValidatorComponent', () => {
  let component: NameValidatorComponent;
  let fixture: ComponentFixture<NameValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
