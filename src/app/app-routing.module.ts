import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserComponent } from './view-user/view-user.component';
const routes: Routes = [
  {path:"",component:ViewUserComponent},
  {path:"./",component:ViewUserComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"view-user",component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
