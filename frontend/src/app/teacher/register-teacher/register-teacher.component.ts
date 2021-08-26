import { Component, OnInit } from '@angular/core';
import { TeacherService } from "../../services/teacher.service";
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'; //para que se ejecute el servidor mientras modificamos el appmodule

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  regisD: any; //any significa cualquier tipo de dato
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _teacherService: TeacherService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.regisD = {}; // la inicializamos como json vacio
    this.message = '';
  }

  ngOnInit(): void {}

  registerTeacher() {}
}
