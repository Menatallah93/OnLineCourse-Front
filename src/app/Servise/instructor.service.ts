import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IInstructor } from '../Shared-Interfase/IUserRegister';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  getInstructorByID(id : any) : Observable<IInstructor>{
      return this.http.get<IInstructor>(`http://localhost:5112/api/Instructor/GetInstructorById/${id}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  
}
