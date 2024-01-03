import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { ISubject } from '../Shared-Interfase/ISubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:5112/api';
  headers: any
  constructor(private Http: HttpClient) { }

  GetAll(): Observable<ISubject[]> {
    return this.Http.get<ISubject[]>(`${this.apiUrl}/Admin/GetAllSubjects`).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(() => error.message || 'Server error');
      })
    );
  }


  GetByID(id: any): Observable<ISubject> {
    return this.Http.get<ISubject>(`${this.apiUrl}/Admin/GetSubject/${id}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }


  Delete(id: number): Observable<any> {
    return this.Http.delete(`${this.apiUrl}/Admin/DeleteSubject/${id}`)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  AddSubject(Sub: ISubject): Observable<{ response: any, error: any }> {
    return this.Http.post(`${this.apiUrl}/Admin/AddSubject`, Sub)
      .pipe(
        map((response: any) => ({ response, error: null })),
        catchError((error) => {
          console.error('Error:', error);
          return [{ response: null, error: error.message || 'Server error' }];
        })
      );
  }

  UpdateSubject(id: number, Sub: ISubject): Observable<{ response: any, error: any }> {
    return this.Http.put(`${this.apiUrl}/Admin/UpdateSubject/${id}`, Sub)
      .pipe(
        map((response: any) => ({ response, error: null })),
        catchError((error) => {
          console.error('Error:', error);
          return [{ response: null, error: error.message || 'Server error' }];
        })
      );
  }

}
