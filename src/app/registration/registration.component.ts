import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import {AbstractControl, FormControl,FormGroup,NgForm,Validators} from '@angular/forms';
import { ViewuserserviceService } from '../viewuserservice.service';
// import { MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  
})
export class RegistrationComponent implements OnInit{
  user: User=new User(0,0,"","","",0);
  // user:User;
  message:any;
  submitted = false;
  integerRegex=/^\d+$/

  registerform=new FormGroup({
    ticketNo:new FormControl('' , [Validators.required , Validators.maxLength(10),Validators.pattern(this.integerRegex)] ),
    fname:new FormControl('',[Validators.required,Validators.maxLength(32)]),
    lname:new FormControl('',[Validators.required,Validators.maxLength(32)]),
    address:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    contactNo:new FormControl('' , [Validators.required , Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ] ),
  });


  
  constructor(private service:RegistrationService) { }

  ngOnInit() {
  this.submitted = false;
  }
getControl(name:any):AbstractControl|null{
  return this.registerform.get(name)
}
  public registerNow(){
  
    this.user.ticketNo=this.registerform.value.ticketNo;
    this.user.fname=this.registerform.value.fname;
    this.user.lname=this.registerform.value.lname;
    this.user.address=this.registerform.value.address;
    this.user.contactNo=this.registerform.value.contactNo;


console.log(this.user);
    // let resp=
    // this.service.doRegistration(this.user).subscribe((data)=>this.message=data);

    this.service.doRegistration(this.user).subscribe(data=>console.log(data), error => console.log(error));
    
    this.registerform.reset();
  }
       

    }
