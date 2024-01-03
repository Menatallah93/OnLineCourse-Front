import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISubject } from '../Shared-Interfase/ISubject';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IInstructor, IInstructorDTO } from '../Shared-Interfase/Instructor';
import { StudentRequest } from '../Shared-Interfase/Student';
import { IRequestAppointmentDTO } from '../Shared-Interfase/RequestAppointment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5112/api';

  studentLevel: string = "";
  requestSubject: ISubject = {
    id: 0,
    name: '',
    grade: undefined
  };

  constructor(private http: HttpClient, private _Router: Router) { }

  selectedLevel(level: string): string {
    this.studentLevel = level;
    return this.studentLevel;
  }

  selectedSubject(subject: ISubject): ISubject {
    this.requestSubject = subject;
    return this.requestSubject;
  }

  getInstructorBySubjectID(subjectID: number): Observable<IInstructorDTO[]> {
    return this.http.get<IInstructorDTO[]>(`${this.apiUrl}/Instructor/GetBySubject/${subjectID}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  addRequestToTakeSubject(studentRequest: StudentRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/Student/StudentRequestToTakeSubject`, studentRequest)
      .pipe(
        map((response: any) => ({ response, error: null })),
        catchError((error) => {
          console.error('Error:', error);
          return [{ response: null, error: error.message || 'Server error' }];
        })
      );
  }


  getAllPendingStudentRequest(): Observable<IRequestAppointmentDTO[]> {
    return this.http.get<IRequestAppointmentDTO[]>(`${this.apiUrl}/Student/GetAllPendingRequest`).pipe(
      catchError((error) => {
        // Handle and return the error message
        console.error('Error:', error);
        return throwError(() => error.message || 'Server error');
      })
    );
  }

  getAllAcceptedStudentRequest(): Observable<IRequestAppointmentDTO[]> {
    return this.http.get<IRequestAppointmentDTO[]>(`${this.apiUrl}/Student/GetAllAcceptedRequest`).pipe(
      catchError((error) => {
        // Handle and return the error message
        console.error('Error:', error);
        return throwError(() => error.message || 'Server error');
      })
    );
  }

  acceptStudentRequest(id: number): Observable<IRequestAppointmentDTO> {
    return this.http.put<IRequestAppointmentDTO>(`${this.apiUrl}/Admin/AcceptStudentRequest/${id}` , null)
    .pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));
  }

  rejectedStudentRequest(id: number): Observable<IRequestAppointmentDTO> {
    return this.http.put<IRequestAppointmentDTO>(`${this.apiUrl}/Admin/RejectStudentRequest/${id}`, null)
    .pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));
  }


}
