import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ToastService } from '../../../toast/toast-service';
import { restApiService } from "../../../core/services/rest-api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

/**
 * Add User Component
 */
export class AddUserComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  userForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private router: Router, private formBuilder: FormBuilder, public toastService: ToastService, public restApiService: restApiService) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Add', active: true }
    ];

    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      DOB: ['', []]
    });
  }

  get form() {
    return this.userForm.controls;
  }

  saveUser() {
    if (this.userForm.valid) {
      this.loading = true;
      this.restApiService.postUserData(this.userForm.value).subscribe(
        (data: any) => {
          this.toastService.show('User created successfully!', { classname: 'bg-success text-white', delay: 3000 })
          this.loading = false;
        },
        (error: any) => {
          this.toastService.show(error, { classname: 'bg-danger text-white', delay: 3000 })
          this.loading = false
      })
    }

    this.submitted = true
  }
}
