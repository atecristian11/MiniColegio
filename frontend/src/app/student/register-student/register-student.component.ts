import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'; //para que se ejecute el servidor mientras modificamos el appmodule

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  regisD: any; //any significa cualquier tipo de dato
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2; //para que la ventanita emergente se quite en dos seg automaticamente

  constructor(
    private _student: StudentService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.regisD = {}; // la inicializamos como json vacio
    this.message = '';
  }

  ngOnInit(): void {}

  registerStudent() {
    if (
      !this.regisD.name ||
      !this.regisD.email ||
      !this.regisD.cedula ||
      !this.regisD.phone ||
      !this.regisD.name1 ||
      !this.regisD.password
    ) {
      console.log('Failed process: Incomplete data'); // error para ver en consola
      this.message = 'Failed process: Incomplete data'; // error para el usuario
      this.openSnackBarError(); //muestra la ventana de error
      this.regisD = {}; //aca se limpia el json para que llene otra vez todos los datos en el formulario
    } else {
      this._student.registerStudent(this.regisD).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken); //guardamos esto en la memoria del navegador
          this._router.navigate(['/registerTeacher']); //lo redirecciona directo al formulario de crear tarea
          this.message = 'Successfull user registration';
          this.openSnackBarSuccesfull();
          this.regisD = {};
        },
        (err) => {
          //aca es si el back nos responde con algun error
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      )
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    }); //tambien se puede colocar la x para cerrarlo
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    }); //tambien se puede colocar la x para cerrarlo
  }
}
