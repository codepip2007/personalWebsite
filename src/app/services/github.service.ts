import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public http: HttpClient) { }

  getRepo() {
    return this.http.get('https://api.github.com/users/codepip2007/repos')
  }

  getRepoCount() {
    return this.http.get('https://api.github.com/users/codepip2007')
  }
}
