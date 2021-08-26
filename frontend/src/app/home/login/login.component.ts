import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'; //para que se ejecute el servidor mientras modificamos el appmodule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  regData: any; //any significa cualquier tipo de dato
  public error: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _homeService: HomeService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.error = '';
    this.regData = {}; // la inicializamos como json vacio
  }

  ngOnInit(): void {}

  login() {}
}
