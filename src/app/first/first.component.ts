import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products-catalog/models/product';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

  @Input() currentProduct: Product  | null = null;
  @Input() products: Product[] = [];
  @Output() notify: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
    // this.currentProduct = {
    //   Id :1,
    //   Name: "Frigorifero",
    //   Available: true,
    //   Price: 1000,
    //   AvailabilityDate : new Date(),
    //   Category: { Id: 1, Name: "Elettrodomestici"},
    //   Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]
    // };

    // this.products.push(this.currentProduct);
    // this.products.push(
    //   {
    //     Id :2,
    //     Name: "Tv Color",
    //     Available: false,
    //     Price: 2000,
    //     AvailabilityDate : new Date(),
    //     Category: { Id: 1, Name: "TV"},
    //     Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]

    //   }
    //)

  }

  showDetails(product: Product):void
  {
    this.notify.emit(product);
  }


}
