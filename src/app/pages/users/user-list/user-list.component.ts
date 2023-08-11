import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { restApiService } from "../../../core/services/rest-api.service";
import { ToastService } from '../../../toast/toast-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

/**
 * User List Component
 */
export class UserListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  
  // api data
  users?: any;
  content?: any;

  // filter
  userName: string = "";
  email: string = "";

  constructor(private modalService: NgbModal, public toastService: ToastService, public restApiService: restApiService) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'List', active: true }
    ];
  }

  getUserData() {
    let query = '?'

    if (this.userName) query += 'userName=' + this.userName
    if (this.email) query += 'email=' + this.email

    this.restApiService.getUserData(query).subscribe(data => {
      this.users = Object.assign([], data);
    })
  }

  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    if (id) {
      this.restApiService.deleteUser(id).subscribe({
        next: data => {
          this.toastService.show('User deleted successfully!', { classname: 'bg-success text-white', delay: 3000 })
        },
        error: err => {
          this.toastService.show(err, { classname: 'bg-danger text-white', delay: 3000 })
        }
      });
      document.getElementById('user_' + id)?.remove();
    }
  }
}
