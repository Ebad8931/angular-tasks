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
});
