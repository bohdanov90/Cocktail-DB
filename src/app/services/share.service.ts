import {EventEmitter, Injectable} from '@angular/core';
import { HttpRequestsService } from "./http-requests.service";
import { FilterItemComponent } from "../components/filter-item/filter-item.component";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public arr = [];
  // public isChecked1 = this.filterItemComponent.isChecked;

  shareOnClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpRequestService: HttpRequestsService,
    // public filterItemComponent: FilterItemComponent
  ) {
    this.fetch();
  }

  fetch() {
    this.httpRequestService.getFilterItems()
      .subscribe(items => {
        // console.log(this.isChecked1);
        this.arr = items['drinks'];
        this.arr.forEach(el => el.checked = true);
        // console.log(this.arr);
        return this.arr;
      });
  }

  checkItem(id) {
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
