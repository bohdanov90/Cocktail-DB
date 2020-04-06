import { FilterItem } from './../../interfaces/filter-item';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  public visible = false;
  public hidden = true;
  public filterItems: FilterItem[];

  constructor(
    private httpService: HttpService,
    private subjectService: SubjectService,
  ) {}

  ngOnInit(): void {
    this.httpService.markAllFilters().subscribe(el => this.filterItems = el);
  }

  onButtonClick(): void {
    this.visible = true;
    this.hidden = false;
  }

}
