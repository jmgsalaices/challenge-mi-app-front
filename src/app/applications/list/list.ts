import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { applicationService, Application } from '../applicationService';

import { MatDialog } from '@angular/material/dialog';
import { NewApplicationDialogComponent } from './../../new-application-dialog/new-application-dialog.component'; 


@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],       
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ApplicationsListComponent implements OnInit {
  applications: Application[] = [];
   loading = true;
  error = '';

  constructor(
    private appService: applicationService, 
    private dialog: MatDialog) 
    {}

   ngOnInit() {
    
    this.loadApplications();
  }
  loadApplications(): void {
     this.appService.getApplications().subscribe({
      next: (data) => {
        this.applications = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load applications';
        this.loading = false;
      }
    });
  }
  openNewApplicationDialog() {
      const dialogRef = this.dialog.open(NewApplicationDialogComponent, {
        width: '500px',
        disableClose: true,
         panelClass: 'custom-modal-style'
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle submitted data
        console.
        log('New Application:', result);
        // TODO: send to backend, update list, etc.
      }
    });

  }
}
