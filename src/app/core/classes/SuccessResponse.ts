import { HttpResponse, HttpHeaders } from '@angular/common/http';

export class SuccessResponse {
  constructor(private response: HttpResponse<any>) {}
  public Message() {
    return (this.response as any).body.message;
  }
  public AccessToken() {
    return (this.response as any).body.data.accessToken;
  }
  public refreshToken() {
    return (this.response as any).body.data.refreshToken;
  }
  public data() {
    return (this.response as any).body.data;
  }
  public paginatedData() {
    return (this.response as any).body.data.docs;
  }
}
