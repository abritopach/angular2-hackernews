import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

    typeSub: any;
    pageSub: any;
    items: any;
    storiesType;
    pageNum: number;
    listStart: number;

    constructor(private hackerNewsAPIService: HackerNewsAPIService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        /*
        this.hackerNewsAPIService.fetchStories()
            .subscribe(
                items => {
                    console.log(items);
                    this.items = items;},
                error => console.log('Error fetching stories'));
                */

        /*
        this.hackerNewsAPIService.fetchStories('news', 1)
            .subscribe(
                items => this.items = items,
                error => console.log('Error fetching stories'));
                */

        this.typeSub = this.activeRoute
            .data
            .subscribe(data => this.storiesType = (data as any).storiesType);

        this.pageSub = this.activeRoute.params.subscribe(params => {
            this.pageNum = +params['page'] ? +params['page'] : 1;
            this.hackerNewsAPIService.fetchStories(this.storiesType, this.pageNum)
                .subscribe(
                    items => this.items = items,
                    error => console.log('Error fetching' + this.storiesType + 'stories'),
                () => this.listStart = ((this.pageNum - 1) * 30) + 1);
        });
    }

}
