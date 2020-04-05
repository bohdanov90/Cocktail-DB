import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShareService {

  public subject = new Subject();
  public subj: Observable<any> = new Subject();

  constructor(
    private httpRequestService: HttpRequestsService,
  ) {}

  passAnArray(arr) {
    this.subject.next(arr);
  }

  getAnArray() {
    return this.subject.asObservable();
  }

}
