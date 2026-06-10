import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-voting-age-validator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voting-age-validator.component.html',
  styleUrl: './voting-age-validator.component.scss'
})
export class VotingAgeValidatorComponent {

  age: number = 0;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.age >= 18;
  }

}
