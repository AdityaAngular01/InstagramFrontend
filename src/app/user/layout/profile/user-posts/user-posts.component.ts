import { Component, OnInit } from "@angular/core";
import { PostService } from "../../../../service/http/post/post.service";
import { LoaderComponent } from "../../../../ReusableComponent/loader/loader.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { RedirectRoutes } from '../../../../redirect.routes';

@Component({
	selector: "app-user-posts",
	imports: [LoaderComponent, CommonModule, RouterLink],
	templateUrl: "./user-posts.component.html",
	styleUrl: "./user-posts.component.css",
})
export class UserPostsComponent implements OnInit {
	protected posts: any;
	protected RedirectRoutes = RedirectRoutes;
	constructor(private postService: PostService) {}
	ngOnInit(): void {
		this.getAllPosts();
	}

	getAllPosts() {
		this.postService.getPosts().subscribe({
			next: (res: any) => {
				this.posts = res.posts;
				console.log(this.posts);
			},
			error: (error: any) => {
				console.log(error.error);
			},
		});
	}
	selectedPostId: number | null = null;

	toggleOverlay(postId: number) {
		this.selectedPostId = this.selectedPostId === postId ? null : postId;
	}
}
