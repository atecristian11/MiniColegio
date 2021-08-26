import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'; //para que se ejecute el servidor mientras modificamos el appmodule

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  regisD: any; //any significa cualquier tipo de dato
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _student: StudentService,     private _router: Router,
    private _snackBar: MatSnackBar) { 
    this.regisD = {}; // la inicializamos como json vacio
    this.message = '';
  }

  ngOnInit(): void {
  }

  registerStudent() {}
}
