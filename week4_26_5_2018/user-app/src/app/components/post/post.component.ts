import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/post.service'
import { Post } from '../../models/Post'
import { NewPostsService } from '../../services/new-posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DataService]
})
export class PostComponent implements OnInit {

  posts: Post[]
  constructor(private _posts: DataService, private _newPost: NewPostsService) { 
   // this.posts = _posts.getData()
    this._newPost.getPosts().subscribe(data => this.posts = data)
  }

  ngOnInit() {
    this._posts.getHttpData().subscribe(data => this.posts = data)
  }

}
