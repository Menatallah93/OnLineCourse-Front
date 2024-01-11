import { Injectable } from '@angular/core';
import { IAllUniveristyStudentRequest, IUniveristyStudentRequest } from '../Shared-Interfase/Student';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class UniveristyServicesService {


    constructor(private http: HttpClient) { }
    addStudent(student: IUniveristyStudentRequest): Observable<any> {
      return this.http.post(`http://localhost:5112/api/UniveristyRequest/AddUniveristyRequest`, student)
        .pipe(catchError((err) => {
          return throwError(() => err.message || "server error");
        }));
    }
  
    AcceptRequest(id: number): Observable<any> {
      return this.http.put(`http://localhost:5112/api/UniveristyRequest/AcceptUniveristyRequest${id}`,null)
        .pipe(catchError((err) => {
          return throwError(() => err.message || "server error");
        }));
    }
  
    RejectRequest(id: number): Observable<any> {
      return this.http.put(`http://localhost:5112/api/UniveristyRequest/RejectedUniveristyRequest${id}`,null)
        .pipe(catchError((err) => {
          return throwError(() => err.message || "server error");
        }));
    }
    getAllPendingRequests(): Observable<IUniveristyStudentRequest[]> {
      return this.http.get<IUniveristyStudentRequest[]>('http://localhost:5112/api/UniveristyRequest/GetAllUniveristyRequest')
        .pipe(
          catchError((error) => {
            console.error('Error in GetAllPendingRequests:', error);
            return throwError(() => 'Server error'); // You can customize the error message
          })
        );
    }
  
    GetUniveristyRequest(): Observable<IAllUniveristyStudentRequest[]> {
      return this.http.get<IAllUniveristyStudentRequest[]>('http://localhost:5112/api/UniveristyRequest/GetUniveristyStudentRequest')
        .pipe(
          catchError((error) => {
            console.error('Error in GetAllPendingRequests:', error);
            return throwError(() => 'Server error'); // You can customize the error message
          })
        );
    }
  
}
