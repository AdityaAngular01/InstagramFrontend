import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpservice:HttpService) { }
  getPosts():Observable<any>{
    return this.httpservice.get('post');
  }
  viewPost(postId:string):Observable<any>{
    return this.httpservice.get(`post/${postId}`);
  }
}
