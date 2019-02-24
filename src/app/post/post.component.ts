import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { 
    this.titleService.setTitle('Posts');
  }

  ngOnInit() {
  }

}
