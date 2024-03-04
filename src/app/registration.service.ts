import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  // public doRegistration(user:User){
  //   return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});

  // }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //a client side or network error occurred.handle it accordingly
      console.error("An error occurred:", error.error.message)
    } else {
      //backend return an unsuccessful return code
      //the response body may contain clues as to what went wrong
      console.error(`Backend returned code ${error.status}` + `body was ${error.error}`)
    }
    //return an observable with a user facing error message
    return throwError('something bad happened, please try again later');
  }
  doRegistration(user: any) {
    console.log(user);
    return this.http.post(`${this.baseUrl}` + 'register', user);
    // return this.http.post<User>(`${this.baseUrl}`+'register', user)
    // .pipe(retry(2),catchError(this.handleError));
  }
}
