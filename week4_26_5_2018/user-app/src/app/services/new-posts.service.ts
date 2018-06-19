import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../models/Post'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPostsService {

  constructor(private _http: HttpClient) { }
  getPosts():Observable<Post[]>{
    return this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
