import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IConsulting, ICoursing } from '../Shared-Interfase/IConsulting';

@Injectable({
  providedIn: 'root'
})
export class CoursesServService {

  constructor(private http: HttpClient) { }
  getAllPendingRequests(): Observable<ICoursing[]> {
    return this.http.get<ICoursing[]>('http://localhost:5112/api/CourseRequest/GetAllCoursesRequest')
      .pipe(
        catchError((error) => {
          console.error('Error in GetAllPendingRequests:', error);
          return throwError(() => 'Server error'); // You can customize the error message
        })
      );
  }
  addCourse(coursimg: ICoursing): Observable<any> {
    return this.http.post(`http://localhost:5112/api/CourseRequest/AddCourseRequest`, coursimg)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  AcceptRequest(id: number): Observable<any> {
    return this.http.put(`http://localhost:5112/api/CourseRequest/AcceptCourseRequest${id}`,null)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  RejectRequest(id: number): Observable<any> {
    return this.http.put(`http://localhost:5112/api/CourseRequest/RejectedCourseRequest${id}`,null)
      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

}
