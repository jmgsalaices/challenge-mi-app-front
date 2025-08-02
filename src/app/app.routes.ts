import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { ApplicationsListComponent } from './applications/list/list';
import { NewApplicationComponent } from './applications/new/new';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'applications', component: ApplicationsListComponent },
  { path: 'new', component: NewApplicationComponent },
  { path: '**', redirectTo: 'login' },
];  