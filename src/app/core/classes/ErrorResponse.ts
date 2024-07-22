import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

export class ErrorResponse {
  constructor(public error: HttpErrorResponse) {}
  public ErrorMessage() {
    return this.error.error.error.message;
  }
}
