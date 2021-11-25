import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnDestroy  {

  private subscription:  Subscription | null = null;
  specialOffers: Product[] = [];
  selectedProduct: Product | null = null;

  showDetails(message: Product){
    this.selectedProduct = message;
    console.log(message);
  }

  constructor(private productsService: ProductsService) {
    console.log('Sono nel costruttore del componente special offers');
    // this.specialOffers = this.productsService.getSpecialOffers();
    this.subscription = this.productsService.getSpecialOffersFromApi().subscribe(
      products => {
        this.specialOffers = products;
        console.log('chiamata API terminata');
      });
    console.log('Sto uscendo dal costruttore');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
