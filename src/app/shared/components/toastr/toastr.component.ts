import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceBusEvents } from '../../enums/service-bus';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private eventBus: EventBusService) { }

  ngOnInit(): void {
    this.eventBus.on(ServiceBusEvents.HttpSuccess, (actionpayload: any) => {
      this.toastr.success(actionpayload.message, actionpayload.status, {
          timeOut: 2000,
          positionClass: 'toast-bottom-right'
        });
    })


  }

}
