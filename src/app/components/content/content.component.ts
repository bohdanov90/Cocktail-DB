import { FilterItem } from './../../interfaces/filter-item';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { HttpService } from '../../services/http.service';
import { map } from 'rxjs/operators';
import { ContentItem } from '../../interfaces/content-item';
import { Data } from '../../interfaces/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit {

  public filterItems: FilterItem[];
  public contentItemsArray: ContentItem[] = [];
  public dataArray: Data[] = [];
  query = 'drinks';

  constructor(
    public subjectService: SubjectService,
    public httpService: HttpService,
  ) {}

  ngOnInit() {
    this.subjectService.getAnArray().subscribe(el => this.filterItems = el);
    this.fetchEveryFilter();
  }

  fetchContent(category: string): Observable<any> {
    return this.httpService.getContentItems(category)
      .pipe(map(data => this.contentItemsArray = data[this.query]));
  }

  fetchEveryFilter(): void { // optimize

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
