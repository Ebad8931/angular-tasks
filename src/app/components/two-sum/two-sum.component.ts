import { Component } from '@angular/core';

@Component({
    selector: 'app-two-sum',
    standalone: true,
    imports: [],
    templateUrl: './two-sum.component.html',
    styleUrl: './two-sum.component.scss'
})
export class TwoSumComponent {
    a = 10;
    b = 5;
    sum = this.a + this.b;
}
