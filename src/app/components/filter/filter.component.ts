import { FilterItem } from './../../interfaces/filter-item';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  public filterItems: FilterItem[];
  public filtersForm: FormGroup;
  public getHeadings$: Observable<Array<FilterItem>>;

  constructor(
    private httpService: HttpService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getHeadings$ = this.httpService.getFilterItems$();
    this.createForm().subscribe();
  }

  createForm(): Observable<FilterItem[]> {
    this.filtersForm = this.formBuilder.group({});
    return this.httpService.getFilterItems$()
    .pipe(
      tap(el => el.forEach(i => this.filtersForm.addControl(i.strCategory, new FormControl(true)))),
    );
  }

  submitForm(): void {
    this.subjectService.passData(this.filtersForm.value);
  }
}
