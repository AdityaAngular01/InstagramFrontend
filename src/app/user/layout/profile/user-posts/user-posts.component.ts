import { Component } from "@angular/core";

@Component({
	selector: "app-user-posts",
	imports: [],
	templateUrl: "./user-posts.component.html",
	styleUrl: "./user-posts.component.css",
})
export class UserPostsComponent {
	getArray(n: number) {
		let array = [];
		for (let i = 0; i < n; i++) {
			array.push(i);
		}
		return array;
	}
}
