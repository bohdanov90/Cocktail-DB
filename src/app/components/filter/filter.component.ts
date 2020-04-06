import { FilterItem } from './../../interfaces/filter-item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  public filterItems: FilterItem[];

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpService: HttpService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.httpService.markAllFilters().subscribe(el => this.filterItems = el);
  }

  markFilterItem(element: number): void {
    this.filterItems[element].checked = !this.filterItems[element].checked;
  }

  onButtonClick(): void {
    this.subjectService.passAnArray(this.filterItems);
    this.buttonClick.emit(this.filterItems);
  }

}
