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

  showDetails(product: Product):void
  {
    this.notify.emit(product);
  }
}
