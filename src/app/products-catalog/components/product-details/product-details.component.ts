import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  product: Product | null = null;

  constructor(private route: ActivatedRoute,
    private service: ProductsService){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.getProductById(id).subscribe(prodotto =>
        this.product = prodotto);
    }
  }
}
