import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Newloginuser } from '../../class/newloginuser';
import { NewuserService } from '../../service/newuser.service';
import { passwordMatchValidator } from '../../shared/password-match-directive';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {

  constructor(private service:NewuserService, private fb:FormBuilder){}
  enteredname:Newloginuser=new Newloginuser("","","","","");

     newUserForm=this.fb.group({
      name: ['',[Validators.required,]],
        username:['',[Validators.required,]],
        email: ['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
        confirmpassword:['',[Validators.required]],
  },{
    Validators:passwordMatchValidator
    })

  //    newUserForm = new FormGroup({
  //   name: new FormControl('',[Validators.required,]),
  //   username: new FormControl('',[Validators.required,]),
  //   email: new FormControl('',[Validators.required,]),
  //   password: new FormControl('',[Validators.required]),
  //   confirmpassword:new FormControl('',[Validators.required]),
  // },{
  //   Validators:passwordMatchValidator
  //   }
  // )

  newsignup(){
    this.enteredname.name= this.newUserForm.value.name;
    this.enteredname.username= this.newUserForm.value.username,
    this.enteredname.email= this.newUserForm.value.email,
    this.enteredname.password= this.newUserForm.value.password,
    this.enteredname.confirmpassword=this.newUserForm.value.confirmpassword,
    console.log(this.enteredname);
    this.service.createNewLoginUser(this.enteredname).subscribe((data:any) => console.log(data), 
    
    error => console.log(error));
    this.newUserForm.reset();
  }

  get name(){
    return this.newUserForm.controls['name'];
  }get username(){
    return this.newUserForm.controls['username'];
  }get email(){
    return this.newUserForm.controls['email'];
  }
  get password(){
    return this.newUserForm.controls['password'];
  }
 get confirmpassword(){
  return this.newUserForm.controls['confirmpassword'];
 }


}
