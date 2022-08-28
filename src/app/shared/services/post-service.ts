import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPost, PostOrder } from '../types';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';

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
    return this.base.getReq(`posts?category_id=${id}`).pipe(
      map((results: IPost[]) =>
        results.sort((a: IPost, b: IPost) => {
          if (order === PostOrder.ASC) {
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
          } else {
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
          }
        })
      )
    );
  }

  getPostById(id: string): Observable<IPost> {
    return this.base.getReq(`posts/${id}`);
  }
}
