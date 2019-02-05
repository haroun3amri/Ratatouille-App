import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {User} from "../Models/user";
import {usersMock} from "../fake-api/users-mock";
import {MatDialog} from "@angular/material";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  users = usersMock;
  showError: boolean = false;
  loginIsValid: boolean =false;
  coonectedUser: User;

  constructor(private fileLoader: FormBuilder , public dialog: MatDialog) { }

  ngOnInit() {
    this.form = this.fileLoader.group({
      controle1: '',
      controle2: '',
    });

  }

  public get controle1(): FormControl {
    return this.form.controls.controle1 as FormControl;
  }

  public get controle2(): FormControl {
    return this.form.controls.controle2 as FormControl;
  }

  public login() {
    for (let user of this.users) {
      console.log(this.form.controls.controle1.value);
      if (user.userName === this.form.controls.controle1.value && user.Password === this.form.controls.controle2.value) {
        this.loginIsValid = true;
        this.coonectedUser = user;
      }
    }
    if(this.loginIsValid) {
      this.openDialog(this.coonectedUser);
    }
    else {
      this.showError = true;
    }

  }

  public openDialog(user: User): void{
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '890px',
      data: {user: user}
    });
  }

}
