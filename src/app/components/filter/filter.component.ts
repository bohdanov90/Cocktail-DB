import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  public filterItems;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpRequestService: HttpRequestsService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.httpRequestService.markAllFilters().subscribe(el => this.filterItems = el);
    this.shareService.getAnArray().subscribe(el => this.filterItems = el);
  }

  markFilterItem(element: number) {
    this.filterItems[element].checked = !this.filterItems[element].checked;
  }

  onButtonClick() {
    this.shareService.passAnArray(this.filterItems);
    this.buttonClick.emit(this.filterItems);
  }

}
