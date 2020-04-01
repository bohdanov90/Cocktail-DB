import {Component, OnInit} from '@angular/core';
import {FilterButtonComponent} from "../filter-button/filter-button.component";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-content-heading',
  templateUrl: './content-heading.component.html',
  styleUrls: ['./content-heading.component.scss']
})
export class ContentHeadingComponent implements OnInit {

  public arr2 = [];

  constructor(
    public share: ShareService
  ) {
    this.share.shareOnClick.subscribe(item => {
      this.arr2 = item.filter( el => {
        return el.checked === true;
      });
    });
  }

  ngOnInit() {}

}
