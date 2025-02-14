import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: "root",
})
export class PostService {
	constructor(private httpservice: HttpService) {}
	getPosts(): Observable<any> {
		return this.httpservice.get("post");
	}
	viewPost(postId: string): Observable<any> {
		return this.httpservice.get(`post/${postId}`);
	}

	getComments(postId: string): Observable<any> {
		return this.httpservice.get(`comment/${postId}`);
	}

	addComment(postId: string, playload: { text: string }): Observable<any> {
		return this.httpservice.post(`comment/${postId}`, playload);
	}

	deleteComment(postId: string, commentId: any): Observable<any> {
		return this.httpservice.delete(`comment/${postId}/${commentId}`);
	}

	isPostLiked(postId:string): Observable<boolean> {
		return this.httpservice.get(`like/isPostLiked/${postId}`);
	}

	likePost(postId: string): Observable<any> {
		return this.httpservice.post(`like/${postId}`, {});
	}
	unlikePost(postId: string): Observable<any> {
		return this.httpservice.delete(`like/${postId}`);
	}
}
