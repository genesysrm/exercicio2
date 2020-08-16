import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  constructor(postsServ: PostService) { 
    postsServ.getTodos().subscribe(post => {
      this.posts = post;
      console.log(post);
    });
  }
  ngOnInit(): void {
  }

}
