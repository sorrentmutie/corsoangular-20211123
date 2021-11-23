import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

  specialOffers: Product[] = [];
  selectedProduct: Product | null = null;

  showDetails(message: Product){
    this.selectedProduct = message;
    console.log(message);
  }


  constructor() {
    this.specialOffers.push(
      {
        Id :1,
        Name: "Frigorifero",
        Available: true,
        Price: 1000,
        AvailabilityDate : new Date(),
        Category: { Id: 1, Name: "Elettrodomestici"},
        Categories: [ { Id: 1, Name: "Elettrodomestici"}, { Id: 2, Name: "Elettrodomestici"}]
      });

    this.specialOffers.push(
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
  }

  ngOnInit(): void {
  }

}
