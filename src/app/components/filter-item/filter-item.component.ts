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

  public filterItems;

  // @Output() sharing: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpRequestService: HttpRequestsService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.httpRequestService.markAllFilters().subscribe(el => {
      this.filterItems = el;
      console.log(this.filterItems);
    }); // ??? всем обновили массив filter items

    // это из баттон компонента
    this.shareService.getAnArray().subscribe(el => {
      this.filterItems = el;
      console.log(this.filterItems);
    }); // ??? всем обновили массив filter items
  }

  ngDoCheck() {
    // this.shareService.passAnArray(this.filterItems);
    // console.log(this.filterItems);
  }

  markFilterItem(element) {
    this.filterItems[element].checked = !this.filterItems[element].checked;
    // console.log(this.filterItems);
    // this.shareService.passAnArray(this.filterItems); // если эмитить эту строку начинаются проблемы
    // console.log('after', this.filterItems);
    // this.sharing.emit(this.filterItems);
    // return this.filterItems;
  }

  onButtonClick() {
    this.shareService.passAnArray(this.filterItems); // всем раздали массив filter items??? во второй раз?
    this.buttonClick.emit(this.filterItems);
  }

}
