import { Component, inject } from '@angular/core';
import { User } from '../../class/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewuserserviceService } from '../../service/viewuserservice.service';
import { ViewUserComponent } from '../view-user/view-user.component';
import { ToastrmessagesService } from '../../service/toastrmessages.service';

@Component({
  selector: 'app-remove-user-modal-component',
  templateUrl: './remove-user-modal-component.component.html',
  styleUrl: './remove-user-modal-component.component.css'
})
export class RemoveUserModalComponentComponent {
  activeModal = inject(NgbActiveModal);
  constructor(private service: ViewuserserviceService, private viewdata: ViewUserComponent, private toastr: ToastrmessagesService) { }
  name: User;
  removeUserData(uid: any) {
    console.log(uid)
    this.service.GetUser(uid).subscribe(res => {
      console.log(res);
      console.log("Got user")
      this.service.Removeuser(uid).subscribe(res => {
        console.log(res);
        console.log("removed user")
        this.viewdata.ngOnInit();
      }, error => console.log(error));
    })
  }

  successuserremove() {
    this.toastr.successmessage("User removed successfully");
  }
}
