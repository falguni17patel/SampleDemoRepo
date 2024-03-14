import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {

  // private baseUrl = 'http://localhost:5000/users/';
  private baseUrl = 'http://rkgroupapp-env.eba-ibrg2hhf.eu-north-1.elasticbeanstalk.com/users/';

  constructor(private http: HttpClient) { }

  createNewLoginUser(enteredname: any) {
    console.log(enteredname);
    return this.http.post(`${this.baseUrl}` + 'new', enteredname);
    // return this.http.post<User>(`${this.baseUrl}`+'register', user)
    // .pipe(retry(2),catchError(this.handleError));
  }
}
