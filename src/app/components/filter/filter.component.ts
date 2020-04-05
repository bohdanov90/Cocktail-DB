import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  public filterItems;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpService: HttpService,
    private shareService: SubjectService
  ) {}

  ngOnInit() {
    this.httpService.markAllFilters().subscribe(el => this.filterItems = el);
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
