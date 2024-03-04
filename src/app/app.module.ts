import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewuserserviceService } from './viewuserservice.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ToastrmessagesService } from './toastrmessages.service';
import { RemoveUserModalComponentComponent } from './remove-user-modal-component/remove-user-modal-component.component';
import { ViewUserModalComponentComponent } from './view-user-modal-component/view-user-modal-component.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ViewUserComponent,
    RemoveUserModalComponentComponent,
    ViewUserModalComponentComponent
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
  providers: [ViewuserserviceService, RegistrationService, ToastrmessagesService, provideClientHydration()],

  bootstrap: [AppComponent]

})
export class AppModule { }
