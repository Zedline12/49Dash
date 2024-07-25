import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
})
export class MainButtonComponent {
  @Output() btnclick: EventEmitter<any> = new EventEmitter();
  emitClick() {
    this.btnclick.emit();
  }
}
