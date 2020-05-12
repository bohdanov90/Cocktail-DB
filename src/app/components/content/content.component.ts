import { FilterItem } from './../../interfaces/filter-item';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { HttpService } from '../../services/http.service';
import { tap } from 'rxjs/operators';
import { ContentItem } from '../../interfaces/content-item';
import { ContentData } from '../../interfaces/content-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit {
  public getHeadings$: Observable<Array<FilterItem>>;
  public contentItems: ContentData[] = [];
  public formValues: object = {};

  constructor(
    public subjectService: SubjectService,
    public httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.subjectService.getData$().subscribe(el => this.formValues = el);
    this.getHeadings$ = this.httpService.getFilterItems$();
    this.getContent$().subscribe();
  }

  saveContentItems$(drinkCategory: string): Observable<Array<ContentItem>> {
    return this.httpService.getContentItems$(drinkCategory)
      .pipe(
        tap(el => this.contentItems = [...this.contentItems, {
            title: drinkCategory,
            data: el,
        }]),
      );
  }

  getContent$(): Observable<Array<FilterItem>> {
    return this.httpService.getFilterItems$()
      .pipe(
        tap(filters => filters.forEach(filter => this.saveContentItems$(filter.strCategory).subscribe())),
      );
  }
}
