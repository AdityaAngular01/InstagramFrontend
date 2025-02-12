import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
	ReactiveFormsModule,
	FormGroup,
	FormControl,
	Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RedirectRoutes } from "../../../redirect.routes";
import { LocalStorageService } from "../../../service/data/LocalStorage/local-storage.service";
import { AuthService } from "../../../service/http/auth/auth.service";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule, CommonModule, ButtonModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
	private RedirectRoutes = RedirectRoutes;
	private router: Router = inject(Router);
	private localStorageService: LocalStorageService =
		LocalStorageService.getInstance();
	protected loginForm: FormGroup = new FormGroup({});
	constructor(private authService: AuthService, private title: Title) {
		this.title.setTitle("Instagram - Login");
	}

	ngOnInit(): void {
		this.initLoginForm();
	}

	initLoginForm() {
		this.loginForm = new FormGroup({
			emailOrUsername: new FormControl("", Validators.required),
			password: new FormControl("", Validators.required),
		});
	}
	onSubmitLogin() {
		const data = this.loginForm.value;

		// Initialize loginData
		const loginData: any = {
			password: data.password,
		};

		// Check if input is an email or username
		if (data.emailOrUsername.includes("@")) {
			loginData.loginWith = "email";
			loginData.email = data.emailOrUsername;
		} else {
			loginData.loginWith = "username";
			loginData.username = data.emailOrUsername;
		}

		// Send login request
		this.authService.login(loginData).subscribe({
			next: (res: any) => {
				alert(res.message);
				this.localStorageService.setToken(res.token);
				this.router.navigateByUrl(RedirectRoutes.user.home);
			},
			error: (error: any) => {
				alert(error.error.message);
			},
		});
	}

	protected redirectToRegister() {
		this.router.navigateByUrl(RedirectRoutes.auth.register);
	}
}
