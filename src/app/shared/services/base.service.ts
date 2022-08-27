import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  getReq(url: string) {
    return this.http.get<[]>(`${this.baseUrl}/${url}`);
  }
}
