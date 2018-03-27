import { ActivatedRoute } from '@angular/router';
import { HackerNewsApiService } from './../../services/hackernews-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-comments',
  templateUrl: './itemComments.component.html',
  styleUrls: ['./itemComments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  @Input() comment;
  collapse: boolean;
  sub: any;
  item;

  constructor(
    private _hackerNewsApiService: HackerNewsApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.collapse = false;

    this.sub = this.route.params.subscribe(params => {
      const itemID = +params['id'];
      this._hackerNewsApiService.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemID));
    });
  }

}
