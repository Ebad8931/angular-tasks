import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-counter',
  standalone: true,
  imports: [],
  templateUrl: './keyboard-counter.component.html',
  styleUrl: './keyboard-counter.component.scss'
})
export class KeyboardCounterComponent {
  counter = 0;

  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowUp') this.counter++;
    if (e.key === 'ArrowDown') this.counter--;
  }
}
