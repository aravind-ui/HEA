import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {

  dialogRef: any;
  constructor(private dialog: MatDialog) { }

  show(message: string, title?: string, closeButtonText?: string) {
    this.dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: { 'message': message, 'title': title, 'closeButtonText': closeButtonText }
    });
  }
}
