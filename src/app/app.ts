import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewApplicationDialogComponent } from './new-application-dialog'; // adjust path  
import { constructorChecks } from '@angular/cdk/schematics';
    
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected title = 'my-app';
}

constructor(private dialog: MatDialog) {}

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
