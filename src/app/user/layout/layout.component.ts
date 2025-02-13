import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Menubar } from "primeng/menubar";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { InputTextModule } from "primeng/inputtext";
import { Ripple } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { ToggleSwitch } from "primeng/toggleswitch";
import { FormsModule } from "@angular/forms";
import { RedirectRoutes } from "../../redirect.routes";
import { LocalStorageService } from "../../service/data/LocalStorage/local-storage.service";

@Component({
	selector: "app-layout",
	imports: [
		CommonModule,
		Menubar,
		BadgeModule,
		AvatarModule,
		InputTextModule,
		Ripple,
		CommonModule,
		RouterOutlet,
		ButtonModule,
		ToggleSwitch,
		FormsModule,
		RouterLink,
	],
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.css",
})
export class LayoutComponent implements OnInit {
	items: MenuItem[] | undefined;
	protected RedirectRoutes = RedirectRoutes;
	private localStorageService: LocalStorageService =
	LocalStorageService.getInstance();
	protected checked: boolean = this.localStorageService.isThemeDark();
	constructor(private router: Router) {}
	ngOnInit() {
		this.items = [
			{
				label: "Home",
				icon: "pi pi-home",
				routerLink: RedirectRoutes.user.home,
			},
			{
				label: "Search",
				icon: "pi pi-search",
				routerLink: RedirectRoutes.user.search,
			},
			{
				label: "Messages",
				icon: "pi pi-comments",
				badge: "3",
				routerLink: RedirectRoutes.user.messages,
			},
			{
				label: "Notifications",
				icon: "pi pi-bell",
				badge: "3",
				routerLink: RedirectRoutes.user.notification,
			},
			{
				label: "Create",
				icon: "pi pi-file-plus",
				routerLink: RedirectRoutes.user.create,
			},
			{
				label: "Settings",
				icon: "pi pi-cog",
				items: [
					{
						label: "Profile",
						icon: "pi pi-user",
						routerLink: RedirectRoutes.user.profile.base,
					},
					{
						label: "Logout",
						icon: "pi pi-power-off",
						command: () => {
							LocalStorageService.getInstance().removeToken();
							this.router.navigateByUrl(RedirectRoutes.auth.base);
						},
					},
				],
			},
		];
		if (this.checked) {
			this.toggleDarkMode();
		}
	}

	toggleDarkMode() {
		this.localStorageService.setThemeDark(this.checked);
		const element = document.querySelector("html");
		element!.classList.toggle("my-app-dark");
	}
}
