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

  // contentItems: ContentItem[] = []; // не используется
  queryFilters = 'drinks';

  constructor(private http: HttpClient) {}

  getFilterItems$(): Observable<Array<FilterItem>> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .pipe(
        map(items => items[this.queryFilters]),
      );
  }

  getContentItems$(drinkCategory: string): Observable<Array<ContentItem>> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`)
      .pipe(
        map(items => items[this.queryFilters]),
      );
  }

}
