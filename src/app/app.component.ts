import { Component } from '@angular/core';
import { Product } from './products-catalog/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-corso';
  availableproducts: Product[] = [];
  currentProduct: Product | null = null;
  specialOffers: Product[] = [];

  constructor() {
    this.currentProduct = {
      Id :1,
      Name: "Frigorifero",
      Available: true,
      Price: 1000,
      AvailabilityDate : new Date(),
      Category: { Id: 1, Name: "Elettrodomestici"},
      Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]
    };

    this.availableproducts.push(this.currentProduct);
    this.availableproducts.push(
      {
        Id :2,
        Name: "Tv Color",
        Available: false,
        Price: 2000,
        AvailabilityDate : new Date(),
        Category: { Id: 1, Name: "TV"},
        Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]
      }
    );

    this.specialOffers.push(this.currentProduct);

  }
}
