import { Response, Http } from '@angular/http'
import { Observable, observable } from 'rxjs'
// import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Post } from '../models/Post'
import { map } from 'rxjs/operators'

@Injectable()
export class DataService {
    constructor(private _http: Http){}
    getData(){
        return [{id: 1, title: 'Post one', body: 'post one body'},
        {id: 2, title: 'Post two', body: 'post two body'}]
    }

    getHttpData(): Observable<Post[]> {
        return this._http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(respo => respo.json()));
    }
}