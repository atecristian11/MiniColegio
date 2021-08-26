import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMatterComponent } from "./matter/register-matter/register-matter.component";
import { RegisterCourseComponent } from "./course/register-course/register-course.component";
import { RegisterStudentComponent } from "./student/register-student/register-student.component";
import { RegisterTeacherComponent } from "./teacher/register-teacher/register-teacher.component";
import { LoginComponent } from "./home/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full', //para que salga el login si se coloca la url completa
  },
  {
    path: 'registerMatter',
    component: RegisterMatterComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
