import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  constructor(private Http: HttpClient)
  { }
 UploadImage (image:any):Observable<any>
{

return this.Http.post('http://localhost:5112/api/UploadImage/UploadImage',image)
  .pipe(
    catchError((error) => {
      console.error('Error:', error);
      return throwError(() => error.message || 'Server error');
    }),
    
  );
}

}
