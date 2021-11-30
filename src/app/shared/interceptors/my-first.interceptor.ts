import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { EventBusService } from '../services/event-bus.service';
import { EmitEvent } from '../models/emit-event';
import { ServiceBusEvents } from '../enums/service-bus';

@Injectable()
export class MyFirstInterceptor implements HttpInterceptor {

  token: string = 'ABCD';
  constructor(private eventBus: EventBusService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
      Observable<HttpEvent<unknown>> {


    this.eventBus.emit(new EmitEvent( ServiceBusEvents.HttpCallStarted,
      {
        message: request.url
      }));

    let richiestaClonata = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token)
    });

    if(!richiestaClonata.headers.has('Content-Type')) {
      richiestaClonata = richiestaClonata.clone(
        { headers: richiestaClonata.headers.set(
          'Content-Type', 'application/json'
        )}
      )
    }


    // console.log(request);
    return next.handle(richiestaClonata)
    .pipe(


      map( (eventoHttp: HttpEvent<unknown>) => {
        if(eventoHttp instanceof HttpResponse) {
          console.log('....stampa evento');
          console.log(eventoHttp);

          this.eventBus.emit(new EmitEvent( ServiceBusEvents.HttpCallEnded,
            {
              message: request.url
            }));

          this.eventBus.emit( new EmitEvent(
            ServiceBusEvents.HttpSuccess, {
              message: request.url,
              status: 'OK'
            }
          ));
        }
        return eventoHttp;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('---> CatchError');
         console.log(error);
         this.eventBus.emit( new EmitEvent(
          ServiceBusEvents.HttpFailure, {
            message: request.url,
            status: 'KO'
          }
        ));

         // chiamata a un servizio che mi mostra notifica nel notific
         return throwError(error);
      })
    );
  }
}
