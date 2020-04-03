import { Injectable } from '@angular/core';
import {FilterItem} from "../interfaces/filter-item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HttpRequestsService {

  constructor(private http: HttpClient) { }

  getFilterItems() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  }

  getContentItems(drinkCategory: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`);
  }

}
