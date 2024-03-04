import { AfterViewInit, Component, Injectable, OnInit, ViewChild, inject, ɵɵqueryRefresh } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { ViewuserserviceService } from '../viewuserservice.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrmessagesService } from '../toastrmessages.service';
import { RemoveUserModalComponentComponent } from '../remove-user-modal-component/remove-user-modal-component.component';
import { ViewUserModalComponentComponent } from '../view-user-modal-component/view-user-modal-component.component';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class ViewUserComponent implements AfterViewInit, OnInit {
  [x: string]: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private modalService = inject(NgbModal);

  user: User = new User(0, 0, "", "", "", 0);

  constructor(private service: ViewuserserviceService, private toastr: ToastrmessagesService, private modalservice: NgbModal) { }

  displayedColumns: string[] = ['uid', 'ticketNo', 'fname', 'lname', 'address', 'contactNo', 'actions'];
  userData: User[] = [];
  dataSource = new MatTableDataSource<User>(this.userData);

  integerRegex = /^\d+$/
  otherthaninteger = /[^0-9]/g

  registerform = new FormGroup({
    uid: new FormControl,
    ticketNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(this.integerRegex)]),
    fname: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    contactNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.otherthaninteger)]),
  });
  ngAfterViewInit() {
    console.log("ngafter called")
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllUsers();
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.ticketNo.toString().includes(filter);
    };
  }
  getAllUsers() {
    console.log("called get all users")
    this.service.GetAllUsers().subscribe(res =>
      this.dataSource.data = res as unknown as User[]);
    console.log("over getallusers")
  }
  getControl(name: any): AbstractControl | null {
    return this.registerform.get(name)
  }

  EditUser(content: any, item: User) {
    console.log(item)
    const modalRef = this.modalservice.open(content, { backdrop: 'static', centered: true });
    this.registerform.patchValue({
      uid: item.uid,
      fname: item.fname,
      lname: item.lname,
      address: item.address,
      ticketNo: item.ticketNo,
      contactNo: item.contactNo,
    });
  }
  editUserData() {
    this.user.uid = this.registerform.value.uid;
    this.user.ticketNo = this.registerform.value.ticketNo;
    this.user.fname = this.registerform.value.fname;
    this.user.lname = this.registerform.value.lname;
    this.user.address = this.registerform.value.address;
    this.user.contactNo = this.registerform.value.contactNo;
    console.log(this.user)

    this.service.EditUserData(this.user).subscribe(data => {
      this.toastr.successmessage('User Edited successfully');
      let result: any;
      result = data;
      console.log(result);
      this.getAllUsers();

    },
      error => console.log(error));
  }

  successuserremove() {
    this.toastr.successmessage("User removed successfully");
  }
  ViewUserData(item: User) {
    const modalRef = this.modalservice.open(ViewUserModalComponentComponent);
    modalRef.componentInstance.name = item;

  }
  removeUser(content1: any, item: User) {
    const modalRef = this.modalservice.open(content1);
    this.registerform.patchValue({
      uid: item.uid,
      fname: item.fname,
      lname: item.lname,
      address: item.address,
      ticketNo: item.ticketNo,
      contactNo: item.contactNo,
    });
  }
  removeUserData(uid: any) {
    console.log(uid)
    this.service.Removeuser(uid).subscribe(res => {
      console.log(res);
      this.getAllUsers();
    }, error => console.log(error));


  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
