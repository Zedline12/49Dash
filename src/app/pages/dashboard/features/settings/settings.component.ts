import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppointmentsService } from 'app/core/services/features/appointments.service';
import { PassportOption } from 'app/core/interfaces/passportOption.interface';
import { ScolarShipType } from 'app/core/interfaces/scolarShipType.interface';

interface Document {
  _id: string;
  name: string;
  id: number;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  scholarshipTypes: ScolarShipType[] = [];
  passportOptions: PassportOption[] = [];
  showAddModal = false;
  newDocument = { value: '', id: 0 };
  isEditingScholarship = false;
  editedDocument: Document | null = null;
  proxyForm!: FormGroup;

  constructor(
    private appointmentsService: AppointmentsService,
    private fb: FormBuilder
  ) {
    this.proxyForm = new FormGroup({
      proxyUsername: new FormControl(),
      proxyPassword: new FormControl(),
    });
  }

  async ngOnInit() {
    await this.loadData();
  }
  onProxySubmit() {
    if (this.proxyForm.valid) {
      const formData = this.proxyForm.value;
      this.appointmentsService
        .editSettings(formData)
        .subscribe((data) => console.log(data));
    } else {
      console.log('Form is invalid');
    }
  }
  async loadData() {
    this.appointmentsService.getSettings().subscribe((data) => {
      console.log(data);
      this.proxyForm.get('proxyUsername')?.setValue(data.data.proxyUsername);
      this.proxyForm.get('proxyPassword')?.setValue(data.data.proxyPassword);
      console.log(this.proxyForm.value);
    });
    this.appointmentsService.getScholarshipTypes().subscribe({
      next: (response: any) => {
        this.scholarshipTypes = response.data;
      },
    });

    this.appointmentsService.getPassportOptions().subscribe({
      next: (response: any) => {
        this.passportOptions = response.data;
      },
    });
  }

  onInputChange(data: any, isScholarship: boolean) {
    console.log(data, isScholarship);
    if (isScholarship) {
      this.appointmentsService
        .updateScholarshipType(data._id, { value: data.value, id: data.id })
        .subscribe({
          next: () => {
            this.loadData();
          },
        });
    } else {
      this.appointmentsService
        .updatePassportOption(data._id, { value: data.value, id: data.id })
        .subscribe({
          next: () => {
            this.loadData();
          },
        });
    }
  }

  onDelete(data: any, isScholarship: boolean) {
    if (isScholarship) {
      this.appointmentsService.deleteScholarshipType(data._id).subscribe({
        next: () => {
          this.loadData();
        },
      });
    } else {
      this.appointmentsService.deletePassportOption(data._id).subscribe({
        next: () => {
          this.loadData();
        },
      });
    }
  }

  openAddModal(isScholarship: boolean) {
    this.isEditingScholarship = isScholarship;
    this.newDocument = { value: '', id: 0 };
    this.showAddModal = true;
  }

  onSubmitNewDocument() {
    if (this.isEditingScholarship) {
      this.appointmentsService.addScholarshipType(this.newDocument).subscribe({
        next: () => {
          this.showAddModal = false;
          this.loadData();
        },
      });
    } else {
      this.appointmentsService.addPassportOption(this.newDocument).subscribe({
        next: () => {
          this.showAddModal = false;
          this.loadData();
        },
      });
    }
  }
}
