import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsService, Application } from '../applications';


@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],       
  templateUrl: './list.html',
})
export class ApplicationsListComponent implements OnInit {
  applications: Application[] = [];
   loading = true;
  error = '';



  constructor(private appService: ApplicationsService) {}

   ngOnInit() {
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
}