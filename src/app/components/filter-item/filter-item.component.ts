import {Component, OnInit} from '@angular/core';
import {FilterItem} from "../../interfaces/filter-item";
import { HttpRequestsService } from "../../services/http-requests.service";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})

export class FilterItemComponent implements OnInit {

  public filterItems: Array<FilterItem> = [];

  constructor(
    private httpRequestService: HttpRequestsService,
    private share: ShareService
  ) {}

  ngOnInit() {
    this.fetchFilters();
  }

  fetchFilters() {
    this.httpRequestService.getFilterItems()
      .subscribe(items => {
        this.filterItems = items['drinks'];
        this.filterItems.forEach(el => el.checked = true);
        return this.filterItems;
      });
  }

  // checkAllItems() {
  //   this.filterItems.forEach(el => el.checked = true);
  // }

  checkItemNew(id) {
    // console.log(this.share.arr);
    return this.share.checkItem(id);
  }

}
