import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post-service';
import { IPost, ITopic, PostOrder } from 'src/app/shared/types';
import topicsJSON from '../../../assets/data/topics.json';

@Component({
  selector: 'app-categories-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  id: string = '';
  topic?: ITopic = undefined;
  posts?: IPost[] = [];
  postCount: number = 0;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get category id
    this.id = this.route.snapshot.paramMap.get('id')!;

    // get related data
    if (this.id) {
      // selected topic
      this.topic = topicsJSON.topics[parseInt(this.id) - 1];

      // get posts by category id in ASC order
      this.postService.getPostsByCategoryId(this.id, PostOrder.DESC).subscribe((data) => {
        // set post count & posts to be displayed
        this.postCount = data.length;
        this.posts = data;
      });
    }
  }
}
