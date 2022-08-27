import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPost } from '../types';
import { BaseService } from './base.service';

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

  getPostsByCategoryId(id: string): Observable<IPost[]> {
    return this.base.getReq(`posts?category_id=${id}`);
  }
}
