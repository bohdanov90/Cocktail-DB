import {Component, OnInit} from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';
import { ShareService } from '../../services/share.service';

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
    private httpRequestsService: HttpRequestsService,
    private shareService: ShareService,
  ) {}

  ngOnInit(): void {
    this.shareService.getAnArray().subscribe();
    this.httpRequestsService.markAllFilters().subscribe(el => this.filterItems = el);
  }

  onButtonClick() {
    this.visible = true;
    this.hidden = false;
  }

}
