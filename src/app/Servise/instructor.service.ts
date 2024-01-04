import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IInstructor } from '../Shared-Interfase/Instructor';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

import { IStudentRequestForInstructor, InstructorSubject } from '../Shared-Interfase/InstructorSubject';
import { IInstructorProfile } from '../Shared-Interfase/IUserRegister';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  iInstructor!: IInstructor
  constructor(private http: HttpClient) { }

  GetAll(): Observable<IInstructor[]> {
    return this.http.get<IInstructor[]>('http://localhost:5112/api/Instructor/GetAllInstructors').pipe(
      catchError((error) => {
        // Handle and return the error message
        console.error('Error:', error);
        return throwError(() => error.message || 'Server error');
      })
    );
  }

  getInstructorByID(id: any): Observable<IInstructor> {
    return this.http.get<IInstructor>(`http://localhost:5112/api/Instructor/GetInstructorById/${id}`)

      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  addInstructorsubject(Instructorsubject: InstructorSubject): Observable<any> {
    return this.http.post(`http://localhost:5112/api/Instructor/AddInstructorSubject`, Instructorsubject)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  GetAllPending(): Observable<IInstructor[]> {
    return this.http.get<IInstructor[]>('http://localhost:5112/api/Instructor/GetAllPendingInstructors').pipe(
      catchError((error) => {
        // Handle and return the error message
        console.error('Error:', error);
        return throwError(() => error.message || 'Server error');
      })
    );
  }

  GetAllAccepted(): Observable<IInstructor[]> {
    return this.http.get<IInstructor[]>('http://localhost:5112/api/Instructor/GetAllAcceptedInstructors').pipe(
      catchError((error) => {
        // Handle and return the error message
        console.error('Error:', error);
        return throwError(() => error.message || 'Server error');
      })
    );
  }

  Accept(id: string): Observable<{ response: any, error: any }> {
    // const headers = this.auth.createHeaders();
    return this.http.put(`http://localhost:5112/api/Admin/AcceptInstructorRequest/${id}`, null)
      .pipe(
        map((response: any) => ({ response, error: null })),
        catchError((error) => {
          console.error('Error:', error);
          return [{ response: null, error: error.message || 'Server error' }];
        })
      );
  }

  Rejected(id: string): Observable<{ response: any, error: any }> {
    // const headers = this.auth.createHeaders();
    return this.http.put(`http://localhost:5112/api/Admin/RejectInstructorRequest/${id}`, null)
      .pipe(
        map((response: any) => ({ response, error: null })),
        catchError((error) => {
          console.error('Error:', error);
          return [{ response: null, error: error.message || 'Server error' }];
        })
      );
  }





  GetRequestForInstructor(id: any): Observable<IStudentRequestForInstructor[]> {
    return this.http.get<IStudentRequestForInstructor[]>(`http://localhost:5112/api/Instructor/GetRequestForInstructor/${id}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }



  GetInstructorWithSubject(id: any): Observable<IInstructorProfile> {
    return this.http.get<IInstructorProfile>(`http://localhost:5112/api/Instructor/GetInstructorWithSubject/${id}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }


  UpdateInstructor(id: any, updatedData: any): Observable<IInstructorProfile> {
    return this.http.put<IInstructorProfile>(`http://localhost:5112/api/Instructor/UpdateInstructorProfile/${id}`, updatedData)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }




}
