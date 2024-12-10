import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [ CommonModule, SharedModule ],
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public onConfirm(): void {
    this.dialogRef.close('yes');
  }

  public onCancel(): void {
    this.dialogRef.close('no');
  }
}
