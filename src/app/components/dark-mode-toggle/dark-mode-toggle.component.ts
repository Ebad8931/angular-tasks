import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.scss'
})
export class DarkModeToggleComponent {

  isDarkMode: boolean = false;
  colorMode: 'light-mode' | 'dark-mode' = 'light-mode'

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.colorMode = this.isDarkMode ? 'dark-mode' : 'light-mode';
  }
}
