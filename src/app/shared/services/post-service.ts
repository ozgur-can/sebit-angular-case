import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPost, PostOrder } from '../types';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { sortPostsByDate } from '../helpers';

@Injectable({
  providedIn: 'root',
})
export class PostService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  // get all posts
  getPosts(): Observable<IPost[]> {
    return this.base.getRequest('posts');
  }

  // get all posts with category id
  getPostsByCategoryId(id: string, order: PostOrder): Observable<IPost[]> {
    return this.base
      .getRequest(`posts?category_id=${id}`)
      .pipe(map((results: IPost[]) => sortPostsByDate(results, order)));
  }

  // get specific post with post id
  getPostById(id: string): Observable<IPost> {
    return this.base.getRequest(`posts/${id}`);
  }

  // get all posts which includes given text value
  getPostByText(text: string, order: PostOrder): Observable<IPost[]> {
    return this.base.getRequest(`posts?q=${text}`).pipe(map((results: IPost[]) => sortPostsByDate(results, order)));;
  }
}
