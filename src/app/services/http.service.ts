import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  filterItems = [];
  contentItems = [];
  query = 'drinks';

  constructor(private http: HttpClient) {
    this.fetchFilters().subscribe();
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
        this.filterItems = items[this.query];
        return this.filterItems;
      }));
  }

  fetchContent(category) { // не используется
    return this.getContentItems(category)
      .pipe(map(items => {
        this.contentItems = items[this.query];
        return this.contentItems;
      }));
  }

  markAllFilters() {
    return this.fetchFilters()
      .pipe(map(() => {
        this.filterItems.forEach(el => el.checked = true);
        return this.filterItems;
      }));
  }

}
