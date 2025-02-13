import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { UserService } from "../../../service/http/user/user.service";
import { TabsModule } from "primeng/tabs";
import { CommonModule } from '@angular/common';
import { RedirectRoutes } from '../../../redirect.routes';
import { LoaderComponent } from '../../../ReusableComponent/loader/loader.component';
@Component({
	selector: "app-profile",
	imports: [TabsModule, CommonModule, RouterLink, RouterOutlet, LoaderComponent],
	templateUrl: "./profile.component.html",
	styleUrl: "./profile.component.css",
})
export class ProfileComponent implements OnInit {
	protected user: any;
	protected RedirectRoutes = RedirectRoutes;
	constructor(
		private title: Title,
		private userService: UserService,
		protected activatedRoute: ActivatedRoute
	) {
		this.title.setTitle("Instagram - Profile");
	}

	tabs: any[] = [
		{
			icon: "pi pi-th-large",
			label: "Posts",
			route: [RedirectRoutes.user.profile.posts],
		},
		{
			icon: "pi pi-video",
			label: "Reels",
			route: [RedirectRoutes.user.profile.reels],
		},
		{
			icon: "pi pi-tag",
			label: "Tags",
			route: [RedirectRoutes.user.profile.tags],
		},
	];
	ngOnInit(): void {
		this.getUserProfile();
	}

	getUserProfile() {
		this.userService.getProfile().subscribe({
			next: (res: any) => {
				console.log(res);
				this.user = res;
			},
			error: (err: any) => {
				console.log(err);
			},
		});
	}
}
