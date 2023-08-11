import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Register Auth
import { AuthenticationService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastService } from '../../toast/toast-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

/**
 * Register Component
 */
export class RegisterComponent implements OnInit {

  // Login Form
  signupForm!: FormGroup;
  submitted = false;
  successmsg = false;
  loading = false;
  error = '';
  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private authenticationService: AuthenticationService,
    public toastService: ToastService) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
     this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * Register submit form
   */
   onSubmit() {
    if (this.signupForm.valid) {
      this.loading = true;

      //Register Api
      this.authenticationService.register(this.f['email'].value, this.f['userName'].value, this.f['password'].value, this.f['firstName'].value, this.f['lastName'].value).pipe(first()).subscribe(
        (data: any) => {
        this.successmsg = true;
        if (this.successmsg) {
          this.toastService.show(data.message, { classname: 'bg-success text-white', delay: 3000 });
        }

        this.loading = false;
      },
      (error: any) => {
        this.toastService.show(error, { classname: 'bg-danger text-white', delay: 3000 });
        this.error = error ? error : '';

        this.loading = false;
      });

    }


    this.submitted = true;
  }

}
