import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  constructor(
    private titleService: Title,
    private http: HttpClient
  ) { 
    this.titleService.setTitle('Posts');
  }

  ngOnInit() {
    const obj$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
    obj$.subscribe({
      next: (response: any[]) =>{
        this.posts = response.slice(0,5).map((res) => {
          return new Post(res.id, res.title, res.body);
        });
        console.log(this.posts);
      }
    })
  }

}
