import { FilterItem } from './../../interfaces/filter-item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  public filterItems: FilterItem[];
  public filtersForm: FormGroup;
  public getItems$: Observable<Array<FilterItem>>;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private httpService: HttpService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getItems$ = this.httpService.getFilterItems$();
    this.createForm().subscribe();
  }

  createForm() {
    this.filtersForm = this.formBuilder.group({});
    return this.httpService.getFilterItems$()
    .pipe(
      tap(el => el.forEach(i => this.filtersForm.addControl(i.strCategory, new FormControl(true)))),
    );
  }

  submitForm() {
    console.log(this.filtersForm.value);
    this.subjectService.passAnArray(this.filtersForm.value);
    this.buttonClick.emit(this.filtersForm.value);
  }

}
