import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  public subject$: Subject<any> = new Subject();

  constructor() {}

  passAnArray(arr: Array<any>): void {
    this.subject$.next(arr);
  }

  getAnArray(): Observable<any> {
    return this.subject$.asObservable();
  }

}
