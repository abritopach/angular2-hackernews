import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    sub: any;
    user: any;
    errorMessage = '';

  constructor(private hackerNewsAPIService: HackerNewsAPIService, private activatedRoute: ActivatedRoute,
              private location: Location) {
  }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            let userID = params['id'];
            this.hackerNewsAPIService.fetchUser(userID).subscribe(data => {
                this.user = data;
            }, error => console.log('Could not load user'));
        });
    }

    goBack() {
        this.location.back();
    }
}
