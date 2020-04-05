import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterItemComponent} from "../filter-item/filter-item.component";
import { ShareService } from "../../services/share.service";
import { HttpRequestsService } from "../../services/http-requests.service";

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})

export class FilterButtonComponent implements OnInit {

  public filterItems;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private share: ShareService,
    private httpRequestsService: HttpRequestsService,
  ) {}

  ngOnInit(): void {
    this.share.getAnArray().subscribe(el => {
      this.filterItems = el;
      console.log(this.filterItems);
    }); // ??? всем обновили массив filter items
  }

  onButtonClick() {
    this.share.passAnArray(this.filterItems); // всем раздали массив filter items??? во второй раз?
    this.buttonClick.emit(this.filterItems);
  }

}
