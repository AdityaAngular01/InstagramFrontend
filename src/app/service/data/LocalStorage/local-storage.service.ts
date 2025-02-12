import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root", // Ensures Singleton behavior
})
export class LocalStorageService {
	private token: string = "";

	private constructor() {
		this.token = localStorage.getItem("token") || "";
	}

	static getInstance(): LocalStorageService {
	
		return new LocalStorageService();
	}

	setToken(token: string): void {
		this.token = token;
		localStorage.setItem("token", token);
	}

	removeToken(): void {
		this.token = "";
		localStorage.removeItem("token");
	}

	isAuthenticated(): boolean {
		return !!this.token;
	}

	getToken(): string {
		return this.token;
	}

	static getObject<T>(key: string): T | null {
		const data = localStorage.getItem(key);
		return data ? (JSON.parse(data) as T) : null;
	}

	static setObject(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	static removeObject(key: string): void {
		localStorage.removeItem(key);
	}
}
