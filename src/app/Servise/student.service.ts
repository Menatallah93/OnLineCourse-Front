import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISubject } from '../Shared-Interfase/ISubject';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IInstructorDTO } from '../Shared-Interfase/Instructor';
import { StudentRequest } from '../Shared-Interfase/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
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
    return this.http.get<IInstructorDTO[]>(`http://localhost:5112/api/Instructor/GetBySubject/${subjectID}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  addRequestToTakeSubject(studentRequest:StudentRequest): Observable<any> {
    return this.http.post('http://localhost:5112/api/Student/StudentRequestToTakeSubject', studentRequest)
      .pipe(
        map((response: any) => ({ response, error: null })),
        catchError((error) => {
          console.error('Error:', error);
          return [{ response: null, error: error.message || 'Server error' }];
        })
      );
  }


}
