import { Component, OnInit } from '@angular/core';
import {FilterArray, FilterItem} from "../../interfaces/filter-item";
import { HttpRequestsService } from "../../services/http-requests.service";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  // public filterItems = this.httpRequestService.createdFiltersArray;

  public filterItems: Array<FilterItem> = [];


  constructor(private httpRequestService: HttpRequestsService) {
    this.fetchFilters();
  }

  ngOnInit() {
    // this.fetchFilters();
  }

  fetchFilters() {
    this.httpRequestService.getFilterItems()
      .subscribe(items => {
        console.log('Response', items);
        this.filterItems = items['drinks'];
        console.log('Filter Items', this.filterItems);
        return this.filterItems;
      });
    // console.log(this.filterItems);
    // return this.filterItems;
  }

  // addItems(arr) {
  //   // console.log(this.filterItems);
  //   if (this.filterItems.length) {
  //     arr = [];
  //     this.filterItems.forEach(el => {
  //       // console.log(el.strCategory);
  //       arr.push(el.strCategory);
  //     })
  //   }
  //
  //   // console.log('ARR', this.arr);
  //   // console.log(this.createdFiltersArray);
  //   console.log(this.filterItems);
  //   console.log(arr);
  //   return arr;
  // }

}
