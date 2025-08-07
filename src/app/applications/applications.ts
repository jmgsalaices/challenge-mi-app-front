
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { NewApplicationDialogComponent } from '../new-application-dialog/new-application-dialog.component'; 


export interface Application {
  id: number;
  date: string;
  type: 'request' | 'offer' | 'complaint';
  status: 'submitted' | 'completed';
}

@Injectable({ providedIn: 'root' })

export class ApplicationsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5064/api/applications'; // ajusta si es necesario

   getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  constructor(private dialog: MatDialog) {}

  createApplication(app: Partial<Application>): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, app);
  }

  openNewApplicationDialog() {
  const dialogRef = this.dialog.open(NewApplicationDialogComponent, {
    width: '400px',
    disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Handle submitted data
      console.log('New Application:', result);
      // TODO: send to backend, update list, etc.
    }
  });
}

}