import { Component, OnInit } from '@angular/core';
import { ServiceBusEvents } from '../../enums/service-bus';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  message: string = '';
  constructor(private eventBus: EventBusService) { }

  ngOnInit(): void {
    this.eventBus.on(ServiceBusEvents.HttpCallStarted, (payload: any) => {
      this.message = 'INIZIO: ' + payload.message;
    });
    this.eventBus.on(ServiceBusEvents.HttpCallEnded, (payload: any) => {
      this.message = 'FINE: ' + payload.message;
    });
  }
}
