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

@Injectable()
export class MyFirstInterceptor implements HttpInterceptor {

  token: string = 'ABCD';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
      Observable<HttpEvent<unknown>> {

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
        }
        return eventoHttp;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('---> CatchError');
         console.log(error);
         // chiamata a un servizio che mi mostra notifica nel notific
         return throwError(error);
      })
    );
  }
}
