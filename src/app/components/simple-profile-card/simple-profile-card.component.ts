import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-simple-profile-card',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './simple-profile-card.component.html',
  styleUrl: './simple-profile-card.component.scss'
})
export class SimpleProfileCardComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  location: string = '';
  qualifications = [{ school: '', degree: '', year: '' }];

  addQualification() {
    this.qualifications.push({ school: '', degree: '', year: '' });
  }
}
