import {Component, OnInit} from '@angular/core';
import {ShareService} from "../../services/share.service";
import {HttpRequestsService} from "../../services/http-requests.service";
import { FilterItemComponent } from "../filter-item/filter-item.component";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-content-heading',
  templateUrl: './content-heading.component.html',
  styleUrls: ['./content-heading.component.scss']
})

export class ContentHeadingComponent implements OnInit {

  public arr2 = [];
  public contentItems: any = [];
  public category = [];

  public arrayOfContentItems = [];
  public strDrink = [];

  constructor(
    public share: ShareService,
    public httpRequestService: HttpRequestsService,
    public filterItemComponent: FilterItemComponent,
  ) {}

  ngOnInit() {
    this.checkAllItemsToTrue();
    this.displayingContent().subscribe();
  }
  displayingContent() {
    return this.httpRequestService.getContentItems('Shot')
      .pipe(map(data => {
        this.arrayOfContentItems = data['drinks'];
        this.arrayOfContentItems.forEach(el => this.strDrink.push(el['strDrink']));
        console.log(this.strDrink);
        return this.strDrink;
      }))
  }

  checkAllItemsToTrue() {
    return this.share.shareOnClick.subscribe(item => {
      this.arr2 = item.filter( el => {
        return el.checked === true;
      });
      console.log(this.arr2);
    });
  }

  fetchFromImport() {
    return this.filterItemComponent.fetchFilters();
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

  clickMe() {
    this.share.shareDoCLick();
  }

}
