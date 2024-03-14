import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { ViewUserComponent } from './component/view-user/view-user.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { authGuard } from './guard/auth.guard';
import { Newloginuser } from './class/newloginuser';
import { NewuserComponent } from './component/newuser/newuser.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  // { path: "./", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },

{ path: "newloginUser",component: NewuserComponent  },
 
  // { path: "registration", component: RegistrationComponent },
  {
    path: "",
    component: LayoutComponent,
    children: [
{ path: "registration", component: RegistrationComponent },
     
      // { path: "**", redirectTo: 'registration', pathMatch: 'full' },

      // { path: "./", redirectTo: 'registration', pathMatch: 'full' },

      { path: "view-user", component: ViewUserComponent,canActivate:[authGuard]  },
      { path: "**", component:PagenotfoundComponent },
    ]
  },
  { path: "**", component:PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
