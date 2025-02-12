import { Component, inject, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../service/http/auth/auth.service';
import { RedirectRoutes } from '../../../redirect.routes';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  private RedirectRoutes = RedirectRoutes;
  private router: Router = inject(Router);

  protected signUpForm: FormGroup = new FormGroup({});

  constructor(private authservice:AuthService, private title: Title) {
		this.title.setTitle("Instagram - Register");

   }

  ngOnInit(): void {
    this.initSignUpForm();
  }

  protected initSignUpForm(){
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      fullName: new FormControl('', [Validators.required])
    })
  }

  onSignUp(){
    this.authservice.signUp(this.signUpForm.value).subscribe({
      next: (res:any)=>{
        alert(res.message);
        this.initSignUpForm();
      },
      error: (err:any)=>{
        alert(err.error.message);
      }
    })
  }

  redirectToLogin(){
    this.router.navigateByUrl(RedirectRoutes.auth.login)
  }
}
