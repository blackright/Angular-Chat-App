import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator() })

  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService,
    private route: Router) {}

  ngOnInit(): void {
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit(){
    if (!this.signUpForm.valid) return;

    //const { name, email, password } = this.signUpForm.value;
    const name = this.signUpForm.value.name as string;
    const email = this.signUpForm.value.email as string;
    const password = this.signUpForm.value.password as string;
    this.authService
    .signup(name, email, password)
    .pipe(
      this.toast.observe({
        success: "Account Created!",
        loading: 'Signing Up',
        error: ({ message }) => `$(message)`
      })
    ).subscribe(() => {
      this.route.navigate(['/home'])
    })
  }
}
