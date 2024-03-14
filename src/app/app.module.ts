import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './component/registration/registration.component';
import { RegistrationService } from './service/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserComponent } from './component/view-user/view-user.component';
import { ViewuserserviceService } from './service/viewuserservice.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ToastrmessagesService } from './service/toastrmessages.service';
import { RemoveUserModalComponentComponent } from './component/remove-user-modal-component/remove-user-modal-component.component';
import { ViewUserModalComponentComponent } from './component/view-user-modal-component/view-user-modal-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginService } from './service/login.service';
import { LayoutComponent } from './component/layout/layout.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { LoginComponent } from './component/login/login.component';
import { NewuserComponent } from './component/newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ViewUserComponent,
    RemoveUserModalComponentComponent,
    ViewUserModalComponentComponent,
    LoginComponent,
    LayoutComponent,
    PagenotfoundComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatFormField,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  providers: [LoginService,LoginComponent, ViewuserserviceService, RegistrationService, ToastrmessagesService, provideClientHydration()],

  bootstrap: [AppComponent]

})
export class AppModule { }
