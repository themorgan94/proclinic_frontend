import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../toast/toast-service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


import { restApiService } from "../../../core/services/rest-api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

/**
 * Add User Component
 */
export class EditUserComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  id: number = -1;
  user!: any;
  userForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, public toastService: ToastService, public restApiService: restApiService) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Edit', active: true }
    ];


    this.userForm = this.formBuilder.group({
      ID: [''],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      DOB: ['', []]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.userForm.controls['ID'].setValue(this.id);

      this.restApiService.getSingleUserData(this.id).subscribe(data => {
        this.user = data;
        this.userForm.controls['userName'].setValue(this.user.userName);
        this.userForm.controls['email'].setValue(this.user.email);
        this.userForm.controls['firstName'].setValue(this.user.person.firstName);
        this.userForm.controls['lastName'].setValue(this.user.person.lastName);
        this.userForm.controls['DOB'].setValue(this.user.person.DOB);
      })
    });
  }

  get form() {
    return this.userForm.controls;
  }

  saveUser() {
    if (this.userForm.valid) {
      this.loading = true;
      this.restApiService.putUserData(this.userForm.value).subscribe(
        (data: any) => {
          this.toastService.show('User updated successfully!', { classname: 'bg-success text-white', delay: 3000 })
          this.loading = false;
        },
        (error: any) => {
          this.toastService.show(error, { classname: 'bg-danger text-white', delay: 3000 })
          this.loading = false
        }
      )
    }

    this.submitted = true
  }
}
