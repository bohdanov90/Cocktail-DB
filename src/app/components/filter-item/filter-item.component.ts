import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FilterItem } from "../../interfaces/filter-item";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  filterItems: FilterItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<FilterItem[]>('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .subscribe(items => {
        console.log('Response', items);
        this.filterItems = items.drinks;
        console.log('Filter Items', this.filterItems);
      })
  }

}
