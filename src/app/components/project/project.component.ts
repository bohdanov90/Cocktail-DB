import {Component, DoCheck, OnInit} from '@angular/core';
import { HttpRequestsService } from "../../services/http-requests.service";
import { ShareService } from "../../services/share.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, DoCheck {

  public visible = false;
  public hidden = true;
  public filterItems = [];
  public contentItemsArray = [];

  constructor(
    private httpRequestsService: HttpRequestsService,
    private shareService: ShareService,
  ) {
    this.shareService.getAnArray().subscribe(arr => console.log(arr));
  }

  ngOnInit(): void {
    this.httpRequestsService.markAllFilters().subscribe(el => {
      this.filterItems = el;
      console.log(this.filterItems);
    }); // ??? всем обновили массив filter items

    this.fetchContent('Beer').subscribe();
  }

  ngDoCheck() {
    console.log(this.contentItemsArray);
  }

  fetchContent(category: string) {
    return this.httpRequestsService.getContentItems(category)
      .pipe(map(data => this.contentItemsArray = data['drinks']));
  }

  tempFunc(event) { // здесь тоже вопрос
    this.visible = true;
    this.hidden = false;
  }

}
