import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApplicationsService {
  private api = 'http://localhost:5064/api/applications';

  constructor(private http: HttpClient) {}

  getApplications() {
    return this.http.get<any[]>(this.api, this.getHeaders());
  }

  createApplication(app: { type: string; message: string }) {
    return this.http.post(this.api, app, this.getHeaders());
  }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
}
