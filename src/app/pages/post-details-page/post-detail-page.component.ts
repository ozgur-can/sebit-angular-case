import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post-service';
import { IPost } from 'src/app/shared/types';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.scss'],
})
export class PostDetailPageComponent implements OnInit {
  id: string = '';
  post?: IPost = undefined;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // get category id
    this.id = this.route.snapshot.paramMap.get('id')!;

    // get posts if id is proper value
    if (this.id) {
      this.postService
        .getPostById(this.id)
        .subscribe((data) => (this.post = data));
    }
  }
}
