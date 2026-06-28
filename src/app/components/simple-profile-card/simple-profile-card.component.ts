import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-simple-profile-card',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './simple-profile-card.component.html',
  styleUrl: './simple-profile-card.component.scss'
})
export class SimpleProfileCardComponent {


  name: string = '';
  email: string = '';
  phone: string = '';
  location: string = '';
  qualifications = [{ school: '', degree: '', year: '' }];

  showHeading: boolean = true;
  submitted: boolean = false;

  addQualification() {
    this.qualifications.push({ school: '', degree: '', year: '' });
  }

  formSubmit() {
    this.showHeading = false;
    this.submitted = true;
  }

  formEdit() {
    this.showHeading = true;
    this.submitted = false
  }
}
