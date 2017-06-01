import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {

  sub: any;
  item: any;

  constructor(private hackerNewsAPIService: HackerNewsAPIService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          let itemID = +params['id'];
          this.hackerNewsAPIService.fetchComments(itemID).subscribe(data => {
              this.item = data;
          }, error => console.log('Could not load item' + itemID));
      });
  }

}
