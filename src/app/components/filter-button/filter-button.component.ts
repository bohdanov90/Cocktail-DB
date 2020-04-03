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

  public arr1 = [];
  public contentItems: any = [];

  @Output() onAdd:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private share: ShareService,
    private httpRequestsService: HttpRequestsService,
  ) {}

  ngOnInit(): void {
    this.share.shareOnClick.subscribe(item => this.arr1 = item);
  }

  clickMe() {
    this.share.shareDoCLick();
  }

}
