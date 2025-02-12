import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-create",
	imports: [],
	templateUrl: "./create.component.html",
	styleUrl: "./create.component.css",
})
export class CreateComponent {
	constructor(private title: Title) {
		this.title.setTitle("Instagram - New Post");
	}
}
