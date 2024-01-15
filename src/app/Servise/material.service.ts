import { UploadTutorialModel } from './../Shared-Interfase/IConsulting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private apiUrl = 'http://localhost:5112/api';


  constructor(private http: HttpClient) { }
  addmaterial(UploadTutorialModel: UploadTutorialModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/Instructor/UploadTutorial`, UploadTutorialModel)
      .pipe(catchError((err: { message: any; }) => {
        return throwError(() => err.message || "server error");
      }));
  }
}


