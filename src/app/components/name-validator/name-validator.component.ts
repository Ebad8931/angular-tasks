import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-validator',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './name-validator.component.html',
  styleUrl: './name-validator.component.scss'
})
export class NameValidatorComponent {
  fullNameValue: string = '';
}
