import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { RegisterStudentComponent } from './student/register-student/register-student.component';
import { RegisterTeacherComponent } from './teacher/register-teacher/register-teacher.component';
import { RegisterMatterComponent } from './matter/register-matter/register-matter.component';
import { RegisterCourseComponent } from './course/register-course/register-course.component';

//importar los sevicios que creamos en la carpeta services manualmente
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { CourseService } from './services/course.service';
import { MatterService } from './services/matter.service';

//importar los guard que creamos en la carpeta guard manualmente
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './home/login/login.component';

//esto es para importar lo visual de angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Esto es para invocar los paquetes con los formularios de angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//con este le estamos diciendo que todas las apis las vamos a manejar por http
import { HttpClientModule } from '@angular/common/http';

//esta es la api de angular material para que nos actualice todos los compenentes que utilicemos este es el menu
import { MatToolbarModule } from '@angular/material/toolbar';
// esta es la api para los botones de angular material
import { MatButtonModule } from '@angular/material/button';

//para importar el modulo de formularios
import { MatFormFieldModule } from '@angular/material/form-field';

//para importar el modulo de cards
import { MatCardModule } from '@angular/material/card';

//para importar el modulo de input que le da diseños cuando vamos a escribir algo en los recuadros de texto
import { MatInputModule } from '@angular/material/input';

//para importar el modulo de mensajes que le vamos a mostrar al usaurio
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    RegisterMatterComponent,
    RegisterCourseComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthGuard,
    StudentService,
    TeacherService,
    CourseService,
    MatterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
