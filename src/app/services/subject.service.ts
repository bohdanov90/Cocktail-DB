import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  public subject$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  passAnArray(arr): void {
    this.subject$.next(arr);
  }

  getAnArray$(): Observable<any> {
    return this.subject$.asObservable();
  }

}
