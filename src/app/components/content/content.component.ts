import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';
import {HttpRequestsService} from '../../services/http-requests.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  public filterItems;
  public contentItemsArray = [];
  public dataArray = [];
  query = 'drinks';

  constructor(
    public shareService: ShareService,
    public httpRequestsService: HttpRequestsService,
  ) {}

  ngOnInit() {
    this.shareService.getAnArray().subscribe(el => this.filterItems = el);
    this.fetchEveryFilter();
  }

  fetchContent(category: string) {
    return this.httpRequestsService.getContentItems(category)
      .pipe(map(data => this.contentItemsArray = data[this.query]));
  }

  fetchEveryFilter() { // оптимизировать

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
      });
    });
    this.fetchContent('Cocktail').subscribe(el => {
      this.dataArray.push({
        title: 'Cocktail',
        data: el,
      });
    });
    this.fetchContent('Milk / Float / Shake').subscribe(el => {
      this.dataArray.push({
        title: 'Milk / Float / Shake',
        data: el,
      });
    });
    this.fetchContent('Other/Unknown').subscribe(el => {
      this.dataArray.push({
        title: 'Other/Unknown',
        data: el,
      });
    });
    this.fetchContent('Cocoa').subscribe(el => {
      this.dataArray.push({
        title: 'Cocoa',
        data: el,
      });
    });
    this.fetchContent('Shot').subscribe(el => {
      this.dataArray.push({
        title: 'Shot',
        data: el,
      });
    });
    this.fetchContent('Coffee / Tea').subscribe(el => {
      this.dataArray.push({
        title: 'Coffee / Tea',
        data: el,
      });
    });
    this.fetchContent('Homemade Liqueur').subscribe(el => {
      this.dataArray.push({
        title: 'Homemade Liqueur',
        data: el,
      });
    });
    this.fetchContent('Punch / Party Drink').subscribe(el => {
      this.dataArray.push({
        title: 'Punch / Party Drink',
        data: el,
      });
    });
    this.fetchContent('Beer').subscribe(el => {
      this.dataArray.push({
        title: 'Beer',
        data: el,
      });
    });
    this.fetchContent('Soft Drink / Soda').subscribe(el => {
      this.dataArray.push({
        title: 'Soft Drink / Soda',
        data: el,
      });
    });

  }

}
