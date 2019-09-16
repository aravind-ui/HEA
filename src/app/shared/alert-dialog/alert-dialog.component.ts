import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from './alert-dialog.model';
@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  title: String = 'Alert';
  message: String = '';
  closeButtonText: String = 'OK';

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    if (this.data.message) {
      this.message = this.data.message;
    }
    if (this.data.title) {
      this.title = this.data.title;
    }
    if (this.data.closeButtonText) {
      this.closeButtonText = this.data.closeButtonText;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}