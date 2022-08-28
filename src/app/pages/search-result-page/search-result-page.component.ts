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
  postFound: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postFound = false;
      // get filter text
      this.text = params.text! || this.route.snapshot.paramMap.get('text')!;

      // subscribe to post service
      this.postService
        .getPostByText(this.text, PostOrder.DESC)
        .subscribe((data) => {
          if (data.length === 0) this.postFound = true;
          this.posts = data;
        });
    });
  }
}
