import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = '';          // Label for the input field
  @Input() type: string = 'text';       // Type of the input (text, password, email, etc.)
  @Input() placeholder: string = '';    // Placeholder text
  @Input() value: string = '';          // Default value
  @Input() required: boolean = false;   // Whether the input is required
  @Input() pattern: string = '';        // Optional regex pattern for validation
  @Output() valueChange = new EventEmitter<string>();  // Emit the updated value

  onChange(event:Event): void {
    this.valueChange.emit((event.target as HTMLInputElement).value); // Emit the change when the input value changes
  }
}
