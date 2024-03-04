import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrmessagesService {

  constructor(private alert: ToastrService) { }
  successmessage(message: string) {
    this.alert.success(message);
  }
}
