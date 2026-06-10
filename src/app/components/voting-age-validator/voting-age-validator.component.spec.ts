import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingAgeValidatorComponent } from './voting-age-validator.component';

describe('VotingAgeValidatorComponent', () => {
  let component: VotingAgeValidatorComponent;
  let fixture: ComponentFixture<VotingAgeValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingAgeValidatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VotingAgeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark the voter as eligible when age is 18 or older', () => {
    component.age = 18;
    component.checkEligibility();
    expect(component.isEligible).toBe(true);

    component.age = 19;
    component.checkEligibility();
    expect(component.isEligible).toBe(true);
  });

  it('should mark the voter as not eligible when age is under 18', () => {
    component.age = 17;
    component.checkEligibility();
    expect(component.isEligible).toBe(false);
  });
});
