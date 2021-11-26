import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private subject$: Subject<Customer> = new Subject<Customer>();
  subjectObservable$: Observable<Customer> | null = null;
  interval: any;
  constructor() {
    this.subjectObservable$ = this.subject$.asObservable();
  }
  start() {
    this.interval = setInterval(
      () => {
        const random = Math.random() * 100;
        const customer = { name: 'Customer' + random,
        city: 'City' + random};
        this.subject$.next(customer);
      }, 2000);
  }

  stop(){
    clearInterval(this.interval);
  }
}
