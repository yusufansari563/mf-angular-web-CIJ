import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  apiKey = '048cc8c0aae1426cae6833847dd60d69';

  get() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`
    );
  }
}
