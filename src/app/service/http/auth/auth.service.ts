import { inject, Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private httpService: HttpService) {}

	signUp(authData: any) {
		return this.httpService.post("auth/signup", authData);
	}

	login(authData: any) {
		return this.httpService.post("auth/login", authData);
	}
}
