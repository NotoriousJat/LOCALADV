import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {
  readonly baseURL = 'http://localhost:3000/home-menu';

  constructor(private http: HttpClient) { }
  postHomeMenu(randomNumber: number){
    return this.http.post(this.baseURL, { randomNumber });
  }
}
