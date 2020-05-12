import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  public formValue$: BehaviorSubject<object> = new BehaviorSubject(null);

  constructor() {}

  passData(data: object): void {
    this.formValue$.next(data);
  }

  getData$(): Observable<object> {
    return this.formValue$.asObservable();
  }
}
