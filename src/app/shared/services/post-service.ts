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

  getPosts(): Observable<IPost[]> {
    return this.base.getReq('posts');
  }

  getPostsByCategoryId(id: string, order: PostOrder): Observable<IPost[]> {
    return this.base
      .getReq(`posts?category_id=${id}`)
      .pipe(map((results: IPost[]) => sortPostsByDate(results, order)));
  }

  getPostById(id: string): Observable<IPost> {
    return this.base.getReq(`posts/${id}`);
  }

  getPostByText(text: string, order: PostOrder): Observable<IPost[]> {
    return this.base.getReq(`posts?q=${text}`).pipe(map((results: IPost[]) => sortPostsByDate(results, order)));;
  }
}
