import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../interface/login-response';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  
  // isloggedInUser:LoginResponse=new LoginResponse("",true,"","");
  isloggedInUser:any;
  localuser:any;
  constructor(private loginService:LoginService, private router:Router){
  


}
  ngOnInit(): void {
    // this.loginService.profileInfo.subscribe(res=>{
    //   console.log(res)
    //   this.isloggedInUser=res;
    //   console.log(this.isloggedInUser)
    // })
    
    if(localStorage!=null){
      this.isloggedInUser=sessionStorage.getItem('isLoggedInUser');
    this.localuser=JSON.parse(this.isloggedInUser);
console.log(this.isloggedInUser)    
console.log(this.localuser)    
    }else{
      this.router.navigateByUrl('/login')
    }

  }
// 

// 
  // }
    // const uname=localStorage.getItem("loggedInUsername");
    // console.log(uname)
    // if(uname!=null){
    //   this.loggedInUsername=JSON.parse(uname);
    
    // }

    signoff() {
      sessionStorage.clear();
      this.router.navigate(["login"]);
    }
  }

