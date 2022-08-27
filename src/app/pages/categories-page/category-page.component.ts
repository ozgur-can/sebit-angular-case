import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post-service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  id: string = '';
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get category id
    this.id = this.route.snapshot.paramMap.get('id')!;

    // get related data
    if (this.id) {
      this.postService
        .getPostById(this.id)
        .subscribe((data) => console.log(data));
    }
  }
}
