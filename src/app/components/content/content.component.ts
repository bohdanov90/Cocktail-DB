import { FilterItem } from './../../interfaces/filter-item';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormValuesService } from '../../services/form-values.service';
import { NetworkService } from '../../services/network.service';
import { concatAll, map, mergeMap, takeUntil } from 'rxjs/operators';
import { ContentData } from '../../interfaces/content-data';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit, OnDestroy {
  public headings$: Observable<Array<FilterItem>>;
  public contentItems: ContentData[] = [];
  public formValues: object = {};
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    public formValuesService: FormValuesService,
    public networkService: NetworkService,
  ) {}

  ngOnInit(): void {
    this.formValuesService.getValue$()
      .pipe(
        takeUntil(this.onDestroy$),
      )
      .subscribe(filters => this.formValues = filters);
    this.headings$ = this.networkService.getFilterItems$();
    this.getContent$().subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  saveContentItems$(drinkCategory: string): Observable<ContentData[]> {
    return this.networkService.getContentItems$(drinkCategory)
      .pipe(
        map(drinks => this.contentItems = [
          ...this.contentItems,
          {title: drinkCategory, data: drinks}
        ]),
      );
  }

  getContent$(): Observable<FilterItem[] | ContentData[]> {
    return this.networkService.getFilterItems$()
      .pipe(
        mergeMap(filters => filters.map(filter => this.saveContentItems$(filter.strCategory))),
        concatAll(),
        takeUntil(this.onDestroy$),
      );
  }
}
