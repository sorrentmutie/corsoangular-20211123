import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private offers: Product[] = [];

  constructor(private http: HttpClient) {
    console.log('Siamo nel costruttore di ProductsService');
  }

  getSpecialOffers(): Product[] {
    this.offers.push(
      {
        Id :1,
        Name: "Frigorifero",
        Available: true,
        Price: 1000,
        AvailabilityDate : new Date(),
        Category: { Id: 1, Name: "Elettrodomestici"},
        Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]
      });
    this.offers.push(
        {
          Id :2,
          Name: "Tv Color",
          Available: false,
          Price: 2000,
          AvailabilityDate : new Date(),
          Category: { Id: 1, Name: "TV"},
          Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]
        });
    return this.offers;
  }

  getSpecialOffersFromApi(): Observable<Product[]> {
    return this.http.get<Product[]>
    (environment.productsBaseApiUrl + 'products');
  }

}
