import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MyPipe } from './products-catalog/pipes/my.pipe';
import { CategoryPipe } from './products-catalog/pipes/category.pipe';
import { SpecialOffersComponent } from './products-catalog/pages/special-offers/special-offers.component';
import { ProductDetailsComponent } from './products-catalog/components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyPipe,
    CategoryPipe,
    SpecialOffersComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
