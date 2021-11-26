import { Component, OnInit } from '@angular/core';
import { ServiceBusEvents } from 'src/app/shared/enums/service-bus';
import { EmitEvent } from 'src/app/shared/models/emit-event';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private service: CustomersService,
    private serviceBus: EventBusService) { }

  ngOnInit(): void {
    this.service.subjectObservable$?.subscribe(
      nuovoCustomer => this.customers.push(nuovoCustomer)
    );
  }

  start(){
    this.service.start();
  }

  stop(){
    this.service.stop();
  };

  broadcast(){
    this.serviceBus.emit(new EmitEvent(
      ServiceBusEvents.CustomerAdded, {
        name: "Mario Rossi", city: "Naples"
      }));
  }

}
