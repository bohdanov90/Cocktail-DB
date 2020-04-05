import { Injectable } from '@angular/core';
import {FilterItem} from "../interfaces/filter-item";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class HttpRequestsService {

  filterItems = [];
  contentItems = [];

  constructor(private http: HttpClient) {
    this.fetchFilters().subscribe(el => console.log(el));
  }

  getFilterItems() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  }

  getContentItems(drinkCategory: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`);
  }

  fetchFilters() {
    return this.getFilterItems()
      .pipe(map(items => {
        this.filterItems = items['drinks'];
        return this.filterItems;
      }));
  }

  fetchContent(category) {
    return this.getContentItems(category)
      .pipe(map(items => {
        this.contentItems = items['drinks'];
        return this.contentItems;
      }));
  }

  markAllFilters() {
    return this.fetchFilters()
      .pipe(map(() => {
        this.filterItems.forEach(el => el.checked = true);
        return this.filterItems;
      }))
  }

}
