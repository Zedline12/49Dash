import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import { AppointmentsService } from 'app/core/services/features/appointments.service';

@Component({
  selector: 'app-passport-options-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './passport-options-dropdown.component.html',
  styleUrls: ['./passport-options-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassportOptionsDropdownComponent),
      multi: true,
    },
  ],
})
export class PassportOptionsDropdownComponent
  implements OnInit, ControlValueAccessor
{
  passportOptions: any[] = [];
  selectedValue: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit() {
    this.loadPassportOptions();
  }

  loadPassportOptions() {
    this.appointmentsService.getPassportOptions().subscribe({
      next: (response: any) => {
        this.passportOptions = response.data;
      },
    });
  }

  writeValue(value: string): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelectionChange(value: string) {
    this.selectedValue = value;
    this.onChange(value);
    this.onTouched();
  }
}
