import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-counter',
  standalone: true,
  imports: [],
  templateUrl: './basic-counter.component.html',
  styleUrl: './basic-counter.component.scss'
})
export class BasicCounterComponent {

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
