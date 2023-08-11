import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Login Auth
import { AuthenticationService } from '../../core/services/auth.service';
import { TokenStorageService } from '../../core/services/token-storage.service';
import { first } from 'rxjs/operators';
import { ToastService } from '../../toast/toast-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  loading = false;

  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,
    public toastService: ToastService) {
      // redirect to home if already logged in
      if (this.tokenStorageService.getUser()) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit(): void {
    if(localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
     this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
   onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      // Login Api
      this.authenticationService.login(this.f['email'].value, this.f['password'].value).subscribe(
        (data:any) => {
          if(data.status == 'success'){
            localStorage.setItem('toast', 'true');
            localStorage.setItem('currentUser', JSON.stringify(data.data));
            localStorage.setItem('token', data.data.accessToken);
            localStorage.setItem('refreshToken', data.data.refreshToken);
            this.router.navigate(['/']);
          } else {
            this.toastService.show(data.data, { classname: 'bg-danger text-white', delay: 3000 });
          }

          this.loading = false;
        },
        (error:any) => {
          this.toastService.show(error, { classname: 'bg-danger text-white', delay: 3000 });
          this.loading = false;
        }
      );
    }

    this.submitted = true;
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
