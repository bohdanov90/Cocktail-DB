import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public arr = [];

  shareOnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public shareDoCLick() {
    this.arr.push(1,2,3,4,5);
    this.shareOnClick.emit(this.arr);
  }
}
