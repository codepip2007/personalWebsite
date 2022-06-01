import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // Get all github repositories for the user codepip2007
  // https://api.github.com/users/codepip2007/repos
  
  repos: any;
  disabled: boolean;
  repocount: any;
  constructor(public git: GithubService) { }

  search() {
    this.git.getRepo().subscribe(repos => {
      this.repos = repos;
    });

    this.disabled = true;
  }

  getRepoCount() {
    this.git.getRepoCount().subscribe(r => {
      this.repocount = r
    })
  }

  ngOnInit() {
    this.disabled = false;

    this.search()
    this.getRepoCount()
  }
  
  
}
