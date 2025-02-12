import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-notification",
	imports: [],
	templateUrl: "./notification.component.html",
	styleUrl: "./notification.component.css",
})
export class NotificationComponent {
	constructor(private title: Title) {
		this.title.setTitle("Instagram - Notifications");
	}
}
