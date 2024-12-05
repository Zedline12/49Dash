import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
@Injectable({ providedIn: 'root' })
export class CoursesService {
  constructor(private readonly http: HttpClient) {}
  createCourse(thumbnail: File, title: string, price: string,description:string, oldPrice?: string) {
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data'
        }),
      };

      const formData = new FormData();
      formData.append('thumbnail', thumbnail);
      formData.append('oldPrice', oldPrice!);
      formData.append('title', title);
          formData.append('price', price);
          formData.append('description',description);
          formData.append('author', "66f7fc566972341e49a87714");
      return this.http.post(
        `${environment.serverUrl}/courses`,
        formData
      );
    }
  }
}
