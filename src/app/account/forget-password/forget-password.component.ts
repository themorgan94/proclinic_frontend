import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../toast/toast-service';
import { AuthenticationService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

/**
 * Forget Password Component
 */
export class ForgetPasswordComponent implements OnInit {

  // Login Form
  forgetPasswordForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  // set the current year
  year: number = new Date().getFullYear(); 

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public toastService: ToastService) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
     this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgetPasswordForm.controls; }

  /**
   * Form submit
   */
   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetPasswordForm.invalid) {
      return;
    }
    else {
      this.authenticationService.forgetPassword(this.f['email'].value).subscribe(
        (data:any) => {
          this.toastService.show(data.message, { classname: 'bg-success text-white', delay: 5000 });
        },
        (error: any) => {
          this.toastService.show(error, { classname: 'bg-danger text-white', delay: 5000 });
        });
    }
  }

}
