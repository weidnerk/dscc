import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-showmessages',
  templateUrl: './showmessages.component.html',
  styleUrls: ['./showmessages.component.scss']
})
export class ShowmessagesComponent {

  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ShowmessagesComponent>) {
    this.message = data.message;
  }
  
  onCancel() {
    this.dialogRef.close();
  }
}
