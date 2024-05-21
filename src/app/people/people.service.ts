import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { People } from './people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private apiURL = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + 'people/').pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  create(people: People): Observable<any> {
    return this.httpClient
      .post(this.apiURL + 'people/', JSON.stringify(people), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
  find(id: string): Observable<any> {
    return this.httpClient.get(this.apiURL + 'people/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  update(id: string, people: People) {
    return this.httpClient
      .put(this.apiURL + 'people/' + id, JSON.stringify(people))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  delete(id: string) {
    return this.httpClient.delete(this.apiURL + 'people/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
