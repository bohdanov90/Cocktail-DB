import { FilterItem } from './../../interfaces/filter-item';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { FormValuesService } from '../../services/form-values.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit, OnDestroy {
  public filtersForm: FormGroup = this.formBuilder.group({});
  public headings$: Observable<Array<FilterItem>>;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private networkService: NetworkService,
    private formValuesService: FormValuesService,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.headings$ = this.networkService.getFilterItems$();
    this.createForm().subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  createForm(): Observable<void[]> {
    return this.networkService.getFilterItems$()
    .pipe(
      map(filters => filters.map(filter => this.filtersForm.addControl(filter.strCategory, new FormControl(true)))),
      takeUntil(this.onDestroy$),
    );
  }

  submitForm(): void {
    this.formValuesService.setValue(this.filtersForm.value);
    this.loaderService.showSpinner();
  }
}
