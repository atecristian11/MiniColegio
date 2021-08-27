import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL; //aca estamos diciendo que env es la url del back queda http://localhost:3001/api/
  }

  registerStudent(student: any) {
    return this._http.post<any>(this.env + 'student/registerStudent', student); //para conectar con el api de backend
  }
}
