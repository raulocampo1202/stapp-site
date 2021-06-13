import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(parm: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/${parm}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  post(parm: string, body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${parm}`, body).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `Error status code ${error.status} status ${error.statusText}`;
    return throwError(msg);
  }
}
