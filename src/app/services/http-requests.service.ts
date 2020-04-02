import { Injectable } from '@angular/core';
import {FilterItem} from "../interfaces/filter-item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  // public drinkCategory: string;

  constructor(private http: HttpClient) { }

  getFilterItems() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  }

  getContentItems(drinkCategory) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`);
  }

  // addItems() {
  //   console.log(this.filterItems);
  //   if (this.filterItems.length) {
  //     this.filterItems.forEach(el => {
  //       // console.log(el.strCategory);
  //       this.createdFiltersArray.push(el.strCategory);
  //     })
  //   }
  //   // console.log('ARR', this.arr);
  //   console.log(this.createdFiltersArray);
  //   return this.createdFiltersArray;
  // }
}