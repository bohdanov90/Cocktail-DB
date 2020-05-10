import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FilterItem } from '../interfaces/filter-item';
import { Observable } from 'rxjs';
import { ContentItem } from '../interfaces/content-item';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  filterItems: FilterItem[] = [];
  contentItems: ContentItem[] = []; // не используется
  query = 'drinks';

  constructor(private http: HttpClient) {}

  getFilterItems$(): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  }

  fetchFilters$(): Observable<Array<FilterItem>> {
    return this.getFilterItems$()
      .pipe(map(items => {
        this.filterItems = items[this.query];
        return this.filterItems;
      }));
  }

  getContentItems$(drinkCategory: string): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`);
  }

  fetchContent$(category: string): Observable<Array<ContentItem>> {
    return this.getContentItems$(category)
      .pipe(map(items => {
        this.contentItems = items[this.query];
        return this.contentItems;
      }));
  }

}
