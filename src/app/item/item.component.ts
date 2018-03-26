import { HackerNewsApiService } from './../services/hackernews-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private _hackerNewsApiService: HackerNewsApiService) { }

  ngOnInit() {
    this._hackerNewsApiService.fetchItem(this.itemID)
      .subscribe(data => {
        this.item = data;
      }, error => console.log(this.itemID + 'wasn\'t loaded'));
  }
}
