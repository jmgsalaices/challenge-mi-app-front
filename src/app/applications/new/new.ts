

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationsService } from '../applications';

@Component({
  selector: 'app-new',
  templateUrl: './new.html',
  standalone: true,
  //styleUrl: './new.css'
})
export class NewApplicationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private appService: ApplicationsService) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.appService.createApplication(this.form.value).subscribe(() => {
        alert('Application submitted');
      });
    }
  }
}
