import {Component, DoCheck, OnInit} from '@angular/core';
import {ShareService} from "../../services/share.service";
import {HttpRequestsService} from "../../services/http-requests.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-content-heading',
  templateUrl: './content-heading.component.html',
  styleUrls: ['./content-heading.component.scss']
})

export class ContentHeadingComponent implements OnInit, DoCheck {

  public filterItems;
  public contentItemsArray = [];
  public dataArray = [];

  constructor(
    public share: ShareService,
    public httpRequestService: HttpRequestsService,
  ) {}

  ngOnInit() {
    this.share.getAnArray().subscribe(el => {
      this.filterItems = el;
      console.log('filterItems', this.filterItems);
    });

    this.fetchEveryFilter();

    console.log('NgOnInit Filter Items', this.filterItems);
    console.log('NgOnInit DataArray', this.dataArray);
  }

  ngDoCheck() {
    console.log('Filter Items', this.filterItems);
    console.log('DataArray', this.dataArray);
  }



  fetchContent(category: string) {
    return this.httpRequestService.getContentItems(category)
      .pipe(map(data => this.contentItemsArray = data['drinks']));
  }

  fetchEveryFilter() {

    // if (this.filterItems) {
    //   this.filterItems.forEach(el => {
    //     if (el.checked === true) {
    //       this.fetchContent(el.strCategory).subscribe();
    //     }
    //   });
    //   return;
    // }

    this.fetchContent('Ordinary Drink').subscribe(el => {
      this.dataArray.push({
        title: 'Ordinary Drink',
        data: el,
      })
    });
    this.fetchContent('Cocktail').subscribe(el => {
      this.dataArray.push({
        title: 'Cocktail',
        data: el,
      })
    });
    this.fetchContent('Milk / Float / Shake').subscribe(el => {
      this.dataArray.push({
        title: 'Milk / Float / Shake',
        data: el,
      })
    });
    this.fetchContent('Other/Unknown').subscribe(el => {
      this.dataArray.push({
        title: 'Other/Unknown',
        data: el,
      })
    });
    this.fetchContent('Cocoa').subscribe(el => {
      this.dataArray.push({
        title: 'Cocoa',
        data: el,
      })
    });
    this.fetchContent('Shot').subscribe(el => {
      this.dataArray.push({
        title: 'Shot',
        data: el,
      })
    });
    this.fetchContent('Coffee / Tea').subscribe(el => {
      this.dataArray.push({
        title: 'Coffee / Tea',
        data: el,
      })
    });
    this.fetchContent('Homemade Liqueur').subscribe(el => {
      this.dataArray.push({
        title: 'Homemade Liqueur',
        data: el,
      })
    });
    this.fetchContent('Punch / Party Drink').subscribe(el => {
      this.dataArray.push({
        title: 'Punch / Party Drink',
        data: el,
      })
    });
    this.fetchContent('Beer').subscribe(el => {
      this.dataArray.push({
        title: 'Beer',
        data: el,
      })
    });
    this.fetchContent('Soft Drink / Soda').subscribe(el => {
      this.dataArray.push({
        title: 'Soft Drink / Soda',
        data: el,
      })
    });
  }

}
