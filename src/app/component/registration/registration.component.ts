import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { RegistrationService } from '../../service/registration.service';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ViewuserserviceService } from '../../service/viewuserservice.service';
import { response } from 'express';
import { ToastrmessagesService } from '../../service/toastrmessages.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',

})
export class RegistrationComponent implements OnInit {
  user: User = new User(0, 0, "", "", "", 0);
  // user:User;
  response: any;
  submitted = false;
  integerRegex = /^\d+$/

  registerform = new FormGroup({
    ticketNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(this.integerRegex)]),
    fname: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    contactNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  });

  constructor(private service: RegistrationService,private toastService:ToastrmessagesService) { }

  ngOnInit() {
    this.submitted = false;
  }
  getControl(name: any): AbstractControl | null {
    return this.registerform.get(name)
  }
  public registerNow() {

    this.user.ticketNo = this.registerform.value.ticketNo;
    this.user.fname = this.registerform.value.fname;
    this.user.lname = this.registerform.value.lname;
    this.user.address = this.registerform.value.address;
    this.user.contactNo = this.registerform.value.contactNo;


    console.log(this.user);
    this.service.doRegistration(this.user).subscribe((data:any) =>{ 
      console.log(data)
      this.response=data;
    if(this.response.result)
    {
this.toastService.successmessage(this.response.message);
    }
    },
    error => console.log(error));
    this.registerform.reset();
  }


}
