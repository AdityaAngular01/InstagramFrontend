import { Component, OnDestroy, OnInit } from "@angular/core";
import { PostService } from "../../service/http/post/post.service";
import { ActivatedRoute } from "@angular/router";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CommonModule, DatePipe } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoaderComponent } from "../loader/loader.component";

import { InputIcon } from "primeng/inputicon";
import { IconField } from "primeng/iconfield";
import { InputTextModule } from "primeng/inputtext";

@Component({
	selector: "app-view-post",
	imports: [
		CardModule,
		ButtonModule,
		CommonModule,
		LoaderComponent,
		DatePipe,
		InputIcon,
		IconField,
		InputTextModule,
		ReactiveFormsModule
	],
	templateUrl: "./view-post.component.html",
	styleUrl: "./view-post.component.css",
})
export class ViewPostComponent implements OnInit, OnDestroy {
	protected post: any;
	protected isLiked: boolean = false;

	protected commentForm: FormGroup = new FormGroup({});

	constructor(
		private postService: PostService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe((params: any) => {
			this.getPost(params.q);
		});
		this.initCommentForm();
	}

	getPost(id: string) {
		this.postService.viewPost(id).subscribe((res: any) => {
			this.post = res.post;
			this.isPostLiked();
			this.getPostComments();
		});
	}

	isPostLiked(){
		this.postService.isPostLiked(this.post._id).subscribe((res: any) => {
            this.isLiked = res.liked;
			this.post.likesCount = res.likesCount;
        });
	}

	onLikePost(){
		this.postService.likePost(this.post._id).subscribe((res: any) => {
            this.isLiked = res.liked;
			this.post.likesCount = res.likesCount;
        });
	}

	onUnlikePost(){
        this.postService.unlikePost(this.post._id).subscribe((res: any) => {
            this.isLiked = res.liked;	
			this.post.likesCount = res.likesCount;
        });
    }

	getPostComments() {
		this.postService.getComments(this.post._id).subscribe((res: any) => {
			this.post.comments = res.comments;
		});
	}

	initCommentForm() {
		this.commentForm = new FormGroup({
            text: new FormControl("", Validators.required),
        });
	}

	// Add New Comment
	onSubmitComment() {
		if(this.commentForm.invalid){
			alert("Please enter a comment");
			return;
		}
		this.postService.addComment(this.post._id,this.commentForm.value).subscribe((res:any)=>{
			this.commentForm.reset();
            this.getPostComments();
            this.post.commentsCount = res.commentsCount;
		})
	}

	onDeleteComment(commentId:string){
		if(confirm("Are you sure you want to delete this comment?")){
            this.postService
				.deleteComment(this.post._id, commentId)
				.subscribe((res: any) => {
            		this.post.commentsCount = res.commentsCount;
					this.getPostComments();
				});
        }
	}

	ngOnDestroy(): void {
		
	}
}
