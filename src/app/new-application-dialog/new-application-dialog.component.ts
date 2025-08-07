import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

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
  template: `
    <h2 mat-dialog-title>New Application</h2>

    <form [formGroup]="form" (ngSubmit)="submit()" class="p-4">
      <!-- Type Selector -->
        <mat-form-field appearance="fill" class="w-100 mb-3">
        <mat-label>Type</mat-label>
        <mat-select formControlName="type" required>
          <mat-option value="request">Request</mat-option>
          <mat-option value="offer">Offer</mat-option>
          <mat-option value="complaint">Complaint</mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Message Textarea -->
      <mat-form-field appearance="fill" class="w-100 mb-3">
        <mat-label>Message</mat-label>
        <textarea
          matInput
          formControlName="message"
          rows="4"
          placeholder="Write your message here..."
        ></textarea>
      </mat-form-field>

      <!-- Error Message -->
      <div *ngIf="form.invalid && form.touched" class="alert alert-danger">
        All fields are required.
      </div>

      <!-- Submit Buttons -->
      <div class="d-flex justify-content-end mt-3">
        <button mat-button type="button" (click)="close()">Cancel</button>
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Submit</button>
      </div>
    </form>
  `
})
export class NewApplicationDialogComponent {
  form: FormGroup;
  private dialogRef = inject(MatDialogRef<NewApplicationDialogComponent>);
  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
