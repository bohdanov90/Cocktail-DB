import { FilterItem } from './../../interfaces/filter-item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  public filterItems: FilterItem[];
  public fetchedFilters: FilterItem[];

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpService: HttpService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.httpService.fetchFilters$().subscribe(el => this.fetchedFilters = el);
    this.markAllFilters$().subscribe(el => this.filterItems = el);
  }

  markAllFilters$(): Observable<Array<FilterItem>> {
    return this.httpService.fetchFilters$()
      .pipe(map(() => {
        this.fetchedFilters.forEach(el => el.checked = true);
        return this.fetchedFilters;
      }));
  }

  markFilterItem(element: number) {
    this.filterItems[element].checked = !this.filterItems[element].checked;
  }

  onButtonClick(): void {
    this.subjectService.passAnArray(this.filterItems);
    this.buttonClick.emit(this.filterItems);
  }

}
