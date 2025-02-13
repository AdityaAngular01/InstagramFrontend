import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/http/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

@Component({
	selector: "app-view-post",
	imports: [CardModule, ButtonModule],
	templateUrl: "./view-post.component.html",
	styleUrl: "./view-post.component.css",
})
export class ViewPostComponent implements OnInit {
	protected post:any;
	constructor(
		private postService: PostService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe((params: any) => {
			this.getPost(params.q);
		});
	}

	getPost(id: string) {
		this.postService.viewPost(id).subscribe((res: any) => {
			this.post = res.post;
			console.log(this.post);
		});
	}
}
