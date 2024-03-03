import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';

@Component({
  selector: 'app-view-user-modal-component',
  templateUrl: './view-user-modal-component.component.html',
  styleUrl: './view-user-modal-component.component.css'
})
export class ViewUserModalComponentComponent {
  activeModal=inject(NgbActiveModal);
  name:User;
// registerform: FormGroup<any>;
// registerform=new FormGroup({
//   uid: new FormControl,
//   ticketNo:new FormControl,
//   fname:new FormControl,
//   lname:new FormControl,
//   address:new FormControl,
//   contactNo:new FormControl,
// });
}
