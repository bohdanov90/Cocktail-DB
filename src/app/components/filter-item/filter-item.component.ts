import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FilterArray, FilterItem} from "../../interfaces/filter-item";
import { HttpRequestsService } from "../../services/http-requests.service";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  // public filterItems = this.httpRequestService.createdFiltersArray;

  public filterItems: Array<FilterItem> = [];

  // public isChecked = true;
  // public random = Math.random();
  // @ViewChild('ref', {static: false}) isCheckedRef: ElementRef;


  constructor(
    private httpRequestService: HttpRequestsService,
    private share: ShareService
  ) {
    this.fetchFilters();
  }

  ngOnInit() {
    // this.checkAllItems();
  }

  fetchFilters() {
    this.httpRequestService.getFilterItems()
      .subscribe(items => {
        this.filterItems = items['drinks'];
        this.filterItems.forEach(el => el.checked = true);
        // console.log(this.filterItems);
        return this.filterItems;
      });
    // console.log(this.filterItems);
    // return this.filterItems;
  }

  // checkAllItems() {
  //   this.filterItems.forEach(el => el.checked = true);
  // }

  checkItemNew(id) {
    // console.log(this.share.arr);
    return this.share.checkItem(id);
  }
}
