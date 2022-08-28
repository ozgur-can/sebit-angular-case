import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post-service';
import { IPost, PostOrder } from 'src/app/shared/types';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent implements OnInit {
  text: string = '';
  posts: IPost[] = [];
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // get filter text
    this.text = this.route.snapshot.paramMap.get('text')!;

    this.postService
      .getPostByText(this.text, PostOrder.DESC)
      .subscribe((data) => (this.posts = data));
  }
}
