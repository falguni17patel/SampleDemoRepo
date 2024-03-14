import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../../class/login';
import { LoginService } from '../../service/login.service';
import { ToastrmessagesService } from '../../service/toastrmessages.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profileInfo=new BehaviorSubject({
    email:'',
  username:''
  })
    login: Login = new Login('', '');
    constructor(private loginService: LoginService, private toastr: ToastrmessagesService,private router:Router) { }
    
    loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required])
    })

    get email(){
      return this.loginForm.controls['email'];
    }
   get password(){
    return this.loginForm.controls['password'];
   }
    signin() {
      this.login.usernameOrEmail = this.loginForm.value.email;
      this.login.password = this.loginForm.value.password;
      console.log(this.login)
      const x=this.loginService.doLogin(this.login);
    //   this.loginService.doLogin(this.login).subscribe((res: any) => {
      // let isLoggedInUser=sessionStorage.getItem("isLoggedInUser")
  
      // console.log(isLoggedInUser)
        // console.log(x)
    //     if (res.result) {
    //       this.profileInfo.next({
    //         email: res.email,
    //         username: res.username
    //       })
    //       console.log(this.profileInfo)
    //       // localStorage.setItem("loggedInUsername",JSON.stringify(this.login.usernameOrEmail));
          // this.router.navigateByUrl("/view-user");
        
    //       this.toastr.successmessage("User signed-in successfully!.");
        
    //       // setUsername(this.login);
    //     } else {
    //       if (res.message == "User not Exists!.") {
    //         this.toastr.successmessage("User not Exists!.");
    //       }
    //       else {
    //         this.toastr.successmessage("wrong password!.");
    //       }
    //     }
    //   },
  
    //     error => console.log(error.message));
  
    //   // this.registerform.reset();
    }
}
