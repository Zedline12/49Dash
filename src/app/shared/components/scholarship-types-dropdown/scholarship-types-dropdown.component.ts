import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import { AppointmentsService } from 'app/core/services/features/appointments.service';

@Component({
  selector: 'app-scholarship-types-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scholarship-types-dropdown.component.html',
  styleUrls: ['./scholarship-types-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScholarshipTypesDropdownComponent),
      multi: true,
    },
  ],
})
export class ScholarshipTypesDropdownComponent
  implements OnInit, ControlValueAccessor
{
  scholarshipTypes: any[] = [];
  selectedValue: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit() {
    this.loadScholarshipTypes();
  }

  loadScholarshipTypes() {
    this.appointmentsService.getScholarshipTypes().subscribe({
      next: (response: any) => {
        this.scholarshipTypes = response.data;
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
