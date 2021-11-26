import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { ServiceBusEvents } from '../enums/service-bus';
import { EmitEvent } from '../models/emit-event';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject = new Subject<any>();

  constructor() { }

  emit(event: EmitEvent) : void{
    this.subject.next(event);
  }

  on(event: ServiceBusEvents, action: any) : Subscription {
    return this.subject
    .pipe(
      filter((e: EmitEvent) => {
        return e.name === event
      }),
      map((e: EmitEvent) => {
        return e.value;
      })
    )
    .subscribe(action);
  }
}
