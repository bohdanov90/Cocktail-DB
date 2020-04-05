import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  public subject = new Subject();
  public subj: Observable<any> = new Subject();

  constructor(
    private httpService: HttpService,
  ) {}

  passAnArray(arr) {
    this.subject.next(arr);
  }

  getAnArray() {
    return this.subject.asObservable();
  }

}
