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
  public filterItems;
  public contentItemsArray = [];

  constructor(
    private httpService: HttpService,
    private shareService: SubjectService,
  ) {}

  ngOnInit(): void {
    this.shareService.getAnArray().subscribe();
    this.httpService.markAllFilters().subscribe(el => this.filterItems = el);
  }

  onButtonClick() {
    this.visible = true;
    this.hidden = false;
  }

}
