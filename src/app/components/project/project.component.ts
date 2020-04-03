import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from "../../services/http-requests.service";
import { ShareService } from "../../services/share.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  contentItems = [];
  array = [];

  constructor(
    private httpRequestsService: HttpRequestsService,
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
    this.array = this.shareService.arr;
    console.log(this.array);
  }

  fetchContent(category) {
    return this.httpRequestsService.getContentItems(category)
      .subscribe(items => {
        console.log(items);
        this.contentItems = items['drinks'];
        console.log(this.contentItems);
      })
  }

}
