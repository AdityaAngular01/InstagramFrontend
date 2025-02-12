import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4000';
  constructor() { }

  post(url:string, playLoad:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/${url}`, playLoad);
  }

  get(url:string, playload?:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${url}`, playload);
  }

  put(url:string, playLoad:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${url}`, playLoad);
  }

  delete(url:string, playload?:any):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${url}`, playload);
  }
}
