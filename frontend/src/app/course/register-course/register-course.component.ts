import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'; //para que se ejecute el servidor mientras modificamos el appmodule

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent implements OnInit {
  regisD: any; //any significa cualquier tipo de dato
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2; //para que la ventanita emergente se quite en dos seg automaticamente

  constructor(
    private _coursesService: CourseService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.regisD = {}; // la inicializamos como json vacio
    this.message = '';
  }

  ngOnInit(): void {}

  registerCourse() {
    if (
      !this.regisD.name1 ||
      !this.regisD.jornada ||
      !this.regisD.school ||
      !this.regisD.nameM
    ) {
      console.log('Failed process: Incomplete data'); // error para ver en consola
      this.message = 'Failed process: Incomplete data'; // error para el usuario
      this.openSnackBarError(); //muestra la ventana de error
      this.regisD = {}; //aca se limpia el json para que llene otra vez todos los datos en el formulario
    } else {
      this._coursesService.registerCourse(this.regisD).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken); //guardamos esto en la memoria del navegador
          this._router.navigate(['/registerStudent']); //lo redirecciona directo al formulario de crear tarea
          this.message = 'Successfull user registration';
          this.openSnackBarSuccesfull();
          this.regisD = {};
        },

        (err) => {
          //aca es si el back nos responde con algun error
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
          this.regisD = {};
        }
      );
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
