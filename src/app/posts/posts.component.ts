import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IPost } from '../Shared Classes and types/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})

export class PostsComponent implements OnInit {

  postsList:Array<IPost>=[];
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getPosts().subscribe(posts =>{
      this.postsList = posts;
    })
  }
}