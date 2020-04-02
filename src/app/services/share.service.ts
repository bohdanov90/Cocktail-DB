import {EventEmitter, Injectable} from '@angular/core';
import { HttpRequestsService } from "./http-requests.service";
import { FilterItemComponent } from "../components/filter-item/filter-item.component";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public arr = [];
  public categoryArray = [];
  // public isChecked1 = this.filterItemComponent.isChecked;

  shareOnClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpRequestService: HttpRequestsService,
    // public filterItemComponent: FilterItemComponent
  ) {
    this.fetch();
  }

  categoryArrayMaking() {
    this.categoryArray = this.arr.map(el => el.strCategory);
    return this.categoryArray;
  }

  fetch() {
    return this.httpRequestService.getFilterItems()
      .subscribe(items => {
        // console.log(this.isChecked1);
        this.arr = items['drinks'];
        this.arr.forEach(el => el.checked = true);
        // return this.arr;
        this.categoryArrayMaking();
      });
  }

  checkItem(id) {
    // console.log(this.categoryArray);
    this.arr[id].checked = !this.arr[id].checked;
    // console.log(this.arr);
    // console.log(this.arr[id].checked);
    // console.log(this.isCheckedRef.nativeElement.checked);
    return this.arr;
  }

  public shareDoCLick() {
    this.shareOnClick.emit(this.arr);
  }

}
