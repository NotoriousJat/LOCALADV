import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  readonly baseUrl = 'http://localhost:3000/home-menu';
  constructor(private http: HttpClient) {}

  sendRandom(name: number) {
    return this.http.post(this.baseUrl, { name });
  }
}
