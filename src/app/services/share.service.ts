import {EventEmitter, Injectable} from '@angular/core';
import { HttpRequestsService } from "./http-requests.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ShareService {

  public arr = [];
  public categoryArray = [];

  shareOnClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpRequestService: HttpRequestsService,
  ) {
    this.fetch().subscribe();
    this.categoryArrayMaking();
  }

  fetch() {
    return this.httpRequestService.getFilterItems()
      .pipe(map(items => {
        this.arr = items['drinks'];
        this.arr.forEach(el => el.checked = true);
        return this.arr;
      }))
  }

  categoryArrayMaking() {
    this.categoryArray = this.arr.map(el => el.strCategory);
    return this.categoryArray;
  }

  checkItem(id) {
    this.arr[id].checked = !this.arr[id].checked;
    return this.arr;
  }

  public shareDoCLick() {
    this.shareOnClick.emit(this.arr);
  }

}
