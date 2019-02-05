import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Product} from "../../Models/product";
import {Router} from '@angular/router';
import {CommandTabsComponent} from "../../shared/command-tabs/command-tabs.component";


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent> , @Inject(MAT_DIALOG_DATA) public data , private router: Router) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('')
  }

}
