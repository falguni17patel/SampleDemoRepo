import { Injectable } from '@angular/core';
import { Login } from '../class/login';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrmessagesService } from './toastrmessages.service';
import { LoginResponse } from '../interface/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  profileInfo = new BehaviorSubject({
    email: '',
    username: ''
  })
  ss:LoginResponse;
  // ss: LoginResponse =new LoginResponse('',true,'','','');
  private baseUrl = 'http://rkgroupapp-env.eba-ibrg2hhf.eu-north-1.elasticbeanstalk.com/api/auth/';
  // private baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrmessagesService) { }

  doLogin(login: Login) {
    console.log(login)
    return this.http.post(<any>`${this.baseUrl}` + 'signin', login).subscribe((res:any) => {
      this.ss= res;
      console.log(this.ss)
      if (this.ss.result) {
        sessionStorage.setItem('isLoggedInUser', JSON.stringify(this.ss))
        // this.profileInfo.next({
        //   email: this.ss.email,
        //   username: this.ss.username
        // debugger;
        // })
        // let p=(this.ss.role);
        // console.log(this.ss.role)
        // if((this.ss.role.name != 'ADMIN') || (this.ss.role.name != 'admin')){
        //   this.router.navigateByUrl('/registration');

        // }
        // else{
          this.router.navigateByUrl('/view-user');
        
        this.toastr.successmessage("User signed-in successfully!.");


      } else {
        sessionStorage.setItem('isLoggedInUser', this.ss.result)
        if (this.ss.message == "User not Exists!.") {
          this.toastr.error("User not Exists!.");
          this.router.navigateByUrl('/login');
        }
        else {
          sessionStorage.setItem('isLoggedInUser', this.ss.result)
          this.toastr.error("wrong password!.");
          this.router.navigateByUrl('/login');
        }
      }
    },

      error => console.log(error.message));

  }
}


