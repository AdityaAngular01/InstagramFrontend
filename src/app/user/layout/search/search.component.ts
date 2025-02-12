import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-search",
	imports: [],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent {
	constructor(private title: Title) {
		this.title.setTitle("Instagram - Search");
	}
}
