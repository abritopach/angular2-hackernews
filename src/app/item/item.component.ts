import { Component, Input, OnInit } from '@angular/core';

//import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item;
  //@Input() itemID: number;
  //item: any;

  constructor(/*private hackerNewsAPIService: HackerNewsAPIService*/) { }

  ngOnInit() {
    /*
    this.hackerNewsAPIService.fetchItem(this.itemID).subscribe(data => {
      console.log(data);
      this.item = data;
    }, error => console.log('Could not load item' + this.itemID));
    */
  }

}
