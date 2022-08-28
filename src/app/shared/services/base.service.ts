import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  getReq(url: string) {
    return this.http.get<[] | any>(`${this.baseUrl}/${url}`);
  }
}
