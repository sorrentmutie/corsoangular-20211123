import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customers/models/customer';
import { CustomersService } from 'src/app/customers/services/customers.service';
import { ServiceBusEvents } from '../../enums/service-bus';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: CustomersService,
    private eventBus: EventBusService) { }
  count: number = 0;
  lastCustomer: Customer | null = null;

  ngOnInit(): void {
    this.service.subjectObservable$?.subscribe( customer => {
      this.count += 1;
      this.lastCustomer = customer;
    });
    this.eventBus.on(ServiceBusEvents.CustomerDeleted,
      (customer: Customer) => this.lastCustomer = customer);
  }

  avvia(){
    this.service.start();
  }

}
