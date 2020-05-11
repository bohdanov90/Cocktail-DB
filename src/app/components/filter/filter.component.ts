import { FilterItem } from './../../interfaces/filter-item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  public filterItems: FilterItem[];
  public fetchedFilters: FilterItem[];
  public filtersForm: FormGroup;
  public filters;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpService: HttpService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.httpService.getFilterItems$().subscribe(el => this.fetchedFilters = el);
    this.markAllFilters$().subscribe(el => this.filterItems = el);
    this.createForm().subscribe(() => console.log(this.filtersForm.value));
  }

  createForm() {
    this.filtersForm = this.formBuilder.group({});
    return this.httpService.getFilterItems$()
    .pipe(
      tap(el => el.forEach(i => this.filtersForm.addControl(i.strCategory, new FormControl(true)))),
    );
  }

  markAllFilters$(): Observable<Array<FilterItem>> {
    return this.httpService.getFilterItems$()
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
