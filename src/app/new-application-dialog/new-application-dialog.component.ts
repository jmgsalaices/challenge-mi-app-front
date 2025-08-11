import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { applicationService, Application } from '../applications/applicationService';

@Component({
  selector: 'app-new-application-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  styleUrl: './new-application-dialog.component.css',
  template: `
<h2 mat-dialog-title class="text-center">New Application</h2>

<form [formGroup]="form" (ngSubmit)="submit()" class="p-3">
  <mat-form-field appearance="outline" class="w-100 mb-3">
    <mat-label>Type</mat-label>
    <mat-select formControlName="type" required>
      <mat-option value="request">Request</mat-option>
      <mat-option value="offer">Offer</mat-option>
      <mat-option value="complaint">Complaint</mat-option>
    </mat-select>
  </mat-form-field>

  <mat-form-field appearance="outline" class="w-100 mb-3">
    <mat-label>Message</mat-label>
    <textarea matInput rows="4" formControlName="message" required></textarea>
  </mat-form-field>

  <div class="d-flex justify-content-end gap-2 mt-4">
    <button mat-stroked-button color="warn" mat-dialog-close>Cancel</button>
    <button mat-flat-button color="primary" type="submit" [disabled]="form.invalid">Submit</button>
  </div>
</form>

  `,
  encapsulation: ViewEncapsulation.None
})
export class NewApplicationDialogComponent {
  form: FormGroup;

 constructor(
    private dialogRef: MatDialogRef<NewApplicationDialogComponent>,
    private fb: FormBuilder,
    private appService: applicationService
  ) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

 submit(): void {
    if (this.form.valid) {
      const application: Application = {
        type: this.form.value.type,
        message: this.form.value.message,
      };

      this.appService.createApplication(application).subscribe({
        next: () => this.dialogRef.close(true),
        error: (err) => console.error('Error creating application', err),
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
