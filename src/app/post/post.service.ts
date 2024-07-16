import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  //get All Methods

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/posts/').pipe(
      catchError((error: HttpErrorResponse) => {
        //return error
        return throwError(error);
      })
    );
  }

  //Create
  create(post: Post): Observable<any> {
    return this.httpClient
      .post(this.apiUrl + '/posts/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          //return error
          return throwError(error);
        })
      );
  }

  //find data
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/posts/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        //return error
        return throwError(error);
      })
    );
  }

  //Update Data
  update(id: number, post: Post): Observable<any> {
    return this.httpClient
      .put(this.apiUrl + '/posts/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          //return error
          return throwError(error);
        })
      );
  }

  //delete
  delete(id: number) {
    return this.httpClient.delete(this.apiUrl + '/posts/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        //return error
        return throwError(error);
      })
    );
  }
}
