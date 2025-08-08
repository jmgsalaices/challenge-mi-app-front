
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Application {
  id?: number;
  date?: string;
  type: 'request' | 'offer' | 'complaint';
  message: string;
  status?: 'submitted' | 'completed';
}

@Injectable({ providedIn: 'root' })

export class applicationService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5064/api/applications'; // ajusta si es necesario

   getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  createApplication(app: Partial<Application>): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, app);
  }

}