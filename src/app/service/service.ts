import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Comment } from '../model/Comment';
import { Photo } from '../model/Phote';



@Injectable({
  providedIn: 'root'
})
export class Service {

  commentUrl = 'https://jsonplaceholder.typicode.com/comments?postId=1';

  photoUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }


  getComment(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl);
  }

  getPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoUrl);
  }


  addCom(message: string, name: string): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, { 'name': name, 'body': message });
  }

  // deleteCom(id: number): Observable<void> {
  //   return this.http.delete<void>(this.commentUrl, id);
  // }
}



