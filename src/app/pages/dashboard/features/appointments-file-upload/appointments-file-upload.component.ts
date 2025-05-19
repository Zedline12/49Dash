import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-file-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments-file-upload.component.html',
  styleUrls: ['./appointments-file-upload.component.scss'],
})
export class AppointmentsFileUploadComponent {
  selectedFile: File | null = null;
  isLoading = false;
  errorMessage = '';
  showSuccessModal = false;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];

      this.selectedFile = file;
  }

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
      this.selectedFile = file!;
    
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onSubmit() {
    if (!this.selectedFile) return;

    this.isLoading = true;
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http
      .post('http://localhost:3001/reservations/upload-excel', formData)
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.selectedFile = null;
          this.showSuccessModal = true;
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorMessage =
            error.error?.message ||
            'An error occurred while uploading the file';
        },
      });
  }

  onModalClose() {
    this.showSuccessModal = false;
    this.router.navigate(['/']);
  }
}
