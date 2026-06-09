import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-show-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './show-modal.component.html',
  styleUrl: './show-modal.component.scss'
})
export class ShowModalComponent {

  displayModal: boolean = false;

  toggleModal() {
    this.displayModal = !this.displayModal;
  }

}
