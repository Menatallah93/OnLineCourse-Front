import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IConsulting } from '../Shared-Interfase/IConsulting';

@Injectable({
  providedIn: 'root'
})
export class ConsultingService {

  constructor(private http: HttpClient) { }
  addConsulting(consulting: IConsulting): Observable<any> {
    return this.http.post(`http://localhost:5112/api/OtherRequests/AddRequest`, consulting)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  AcceptRequest(id: number): Observable<any> {
    return this.http.put(`http://localhost:5112/api/OtherRequests/AcceptRequest${id}`,null)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  RejectRequest(id: number): Observable<any> {
    return this.http.put(`http://localhost:5112/api/OtherRequests/RejectedRequest${id}`,null)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }
  getAllPendingRequests(): Observable<IConsulting[]> {
    return this.http.get<IConsulting[]>('http://localhost:5112/api/OtherRequests/GetAllConsultingRequest')
      .pipe(
        catchError((error) => {
          console.error('Error in GetAllPendingRequests:', error);
          return throwError(() => 'Server error'); // You can customize the error message
        })
      );
  }
}
