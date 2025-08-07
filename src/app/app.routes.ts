import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { ApplicationsListComponent } from './applications/list/list';
import { NewApplicationDialogComponent } from './new-application-dialog/new-application-dialog.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'applications', component: ApplicationsListComponent },
  { path: 'new', component: NewApplicationDialogComponent },
  { path: '**', redirectTo: 'login' },
];  