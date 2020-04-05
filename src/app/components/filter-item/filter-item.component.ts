import {Component, EventEmitter, OnInit, DoCheck, Output} from '@angular/core';
import {FilterItem} from "../../interfaces/filter-item";
import { HttpRequestsService } from "../../services/http-requests.service";
import {ShareService} from "../../services/share.service";
import {map} from "rxjs/operators";
import { MarkFilterItemService } from "../../services/mark-filter-item.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})

export class FilterItemComponent implements OnInit, DoCheck {

  public filterItems: Array<FilterItem> = [];
  public markFilterItemService: MarkFilterItemService;

  @Output() sharing: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpRequestService: HttpRequestsService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.httpRequestService.markAllFilters().subscribe(el => {
      this.filterItems = el;
      console.log(this.filterItems);
    }); // ??? всем обновили массив filter items
    this.shareService.getAnArray().subscribe(el => console.log(el));
  }

  ngDoCheck() {
    this.shareService.passAnArray(this.filterItems);
    console.log(this.filterItems);
  }

  markFilterItem(element) {
    this.filterItems[element].checked = !this.filterItems[element].checked;
    console.log(this.filterItems);
    this.shareService.passAnArray(this.filterItems); // если эмитить эту строку начинаются проблемы
    console.log('after', this.filterItems);
    // this.sharing.emit(this.filterItems);
  }

}
