import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-messages",
	imports: [],
	templateUrl: "./messages.component.html",
	styleUrl: "./messages.component.css",
})
export class MessagesComponent {
	constructor(private title: Title) {
		this.title.setTitle("Instagram - Messages");
	}
}
