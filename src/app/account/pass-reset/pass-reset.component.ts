import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../toast/toast-service';
import { AuthenticationService } from '../../core/services/auth.service';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.scss']
})

/**
 * Pass Reset Component
 */
export class PassResetComponent implements OnInit {

   // Login Form
   passresetForm!: FormGroup;
   submitted = false;
   passwordField!: boolean;
   error = '';
   returnUrl!: string;
   // set the current year
   year: number = new Date().getFullYear();
 
   constructor(private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public toastService: ToastService) { }
 
   ngOnInit(): void {
     /**
      * Form Validatyion
      */
    this.passresetForm = this.formBuilder.group({
       token: ['', [Validators.required]],
       password: ['', [Validators.required]]
    });

    this.route.params.subscribe(params => {
      this.passresetForm.controls['token'].setValue(params['token']);
    });
   }
 
   // convenience getter for easy access to form fields
   get f() { return this.passresetForm.controls; }
 
   /**
    * Form submit
    */
    onSubmit() {
     this.submitted = true;
 
     // stop here if form is invalid
     if (this.passresetForm.invalid) {
       return;
     }
     else {
      this.authenticationService.resetPassword(this.f['password'].value, this.f['token'].value).subscribe(
        (data:any) => {
          this.toastService.show(data.message, { classname: 'bg-success text-white', delay: 5000 });
        },
        (error: any) => {
          this.toastService.show(error, { classname: 'bg-danger text-white', delay: 5000 });
        });
    }
   }

   /**
   * Password Hide/Show
   */
    togglepasswordField() {
      this.passwordField = !this.passwordField;
    }
}
