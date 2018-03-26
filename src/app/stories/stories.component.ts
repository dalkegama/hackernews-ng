import { Component, OnInit } from '@angular/core';

import { HackerNewsApiService } from './../services/hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;

  constructor(private _hackerNewsApiService: HackerNewsApiService) { }

  ngOnInit() {
    this._hackerNewsApiService.fetchTopStories()
      .subscribe(
      items => this.items = items,
      error => console.log('error'));
  }
}
