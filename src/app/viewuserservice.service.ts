import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ViewuserserviceService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //a client side or network error occurred.handle it accordingly
      console.error("An error occurred :", error.error.message)
    } else {
      //backend return an unsuccessful return code
      //the response body may contain clues as to what went wrong
      console.error(`Backend returned code ${error.status}` + `body was ${error.error}`)
    }
    //return an observable with a user facing error message
    return throwError('something bad happened, please try again later');
  }
  GetAllUsers():Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getAllUser');
    // return this.http.get<User>(this.baseUrl + 'getAllUser').pipe(retry(2),catchError(this.handleError));
  }
  GetUser(uid: any):Observable<User>{
    return this.http.get<User>(this.baseUrl + 'getUser/' + uid).pipe(retry(2),catchError(this.handleError));
  }
  Removeuser(uid: any) {
    console.log(uid)
    console.log("remove service")
    return this.http.delete(this.baseUrl + "removeUser/" + uid).pipe(retry(2),catchError(this.handleError));

  }
  EditUserData(user: User):Observable<User> {
    console.log(user)
    return this.http.put<User>(this.baseUrl+"updateUser",user);
    // return this.http.put<User>(this.baseUrl + "updateUser",JSON.stringify(user)).pipe(retry(2),catchError(this.handleError));
  }
  doRegistration(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.baseUrl}`+'register', JSON.stringify(user))
    .pipe(retry(2),catchError(this.handleError));
  }
}
