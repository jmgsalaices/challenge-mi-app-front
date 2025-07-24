import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../applications';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  standalone: true,
  //styleUrl: './list.css'
})
export class ApplicationsListComponent implements OnInit {
  applications: any[] = [];

  constructor(private appService: ApplicationsService) {}

  ngOnInit() {
    this.appService.getApplications().subscribe(data => this.applications = data);
  }
}
