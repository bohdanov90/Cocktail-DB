import {Component, OnInit} from '@angular/core';
import {FilterButtonComponent} from "../filter-button/filter-button.component";
import {ShareService} from "../../services/share.service";
import {HttpRequestsService} from "../../services/http-requests.service";

@Component({
  selector: 'app-content-heading',
  templateUrl: './content-heading.component.html',
  styleUrls: ['./content-heading.component.scss']
})
export class ContentHeadingComponent implements OnInit {

  public arr2 = [];
  public contentItems: any = [];
  public category = [];

  constructor(
    public share: ShareService,
    public httpRequestService: HttpRequestsService,
  ) {
    this.checkAllItemsToTrue();
    // console.log(this.category);
    // console.log(this.share.categoryArray);
    // ЗДЕСЬ ИДЕТ РАЗРЫВ!!!!!!!!!!!!!!!!! НЕ ВИДИМ ИЗМЕНЕННЫЙ МАССИВ category
  }

  ngOnInit() {
    // this.fetchNew(this.category[0]);
  }

  checkAllItemsToTrue() {
    this.share.shareOnClick.subscribe(item => {
      this.arr2 = item.filter( el => {
        return el.checked === true;
      });
    });
  }

  fetchNew(category) {
    return this.httpRequestService.getFilterItems()
      .subscribe(items => {
        // console.log(this.isChecked1);
        this.arr2 = items['drinks'];
        this.arr2.forEach(el => el.checked = true);
        console.log(this.arr2);
        // return this.arr;
        this.category = this.arr2.map(el => el.strCategory);
        console.log(this.category);
        // console.log(this.category);
        this.fetchContent(category);
      });
  }

  fetchContent(category) {
    return this.httpRequestService.getContentItems(category)
      .subscribe(items => {
        console.log(items);
        this.contentItems = items['drinks'];
        console.log(this.contentItems);
      })
  }

}
