import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MyPipe } from './products-catalog/pipes/my.pipe';
import { CategoryPipe } from './products-catalog/pipes/category.pipe';
import { SpecialOffersComponent } from './products-catalog/pages/special-offers/special-offers.component';
import { ProductDetailsComponent } from './products-catalog/components/product-details/product-details.component';
import { RandomUserListComponent } from './random-users/components/random-user-list/random-user-list.component';
import { TestFormComponent } from './shared/components/test-form/test-form.component';
import { HeroFormComponent } from './hero-form/components/hero-form/hero-form.component';
import { HeroReactiveFormComponent } from './hero-reactive/hero-reactive-form/hero-reactive-form.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { MyFirstInterceptor } from './shared/interceptors/my-first.interceptor';
import { MySecondInterceptor } from './shared/interceptors/my-second.interceptor';
import { CustomersListComponent } from './customers/components/customers-list/customers-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrComponent } from './shared/components/toastr/toastr.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyPipe,
    CategoryPipe,
    SpecialOffersComponent,
    ProductDetailsComponent,
    RandomUserListComponent,
    TestFormComponent,
    HeroFormComponent,
    HeroReactiveFormComponent,
    NotFoundComponent,
    MenuComponent,
    CustomersListComponent,
    ToastrComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyFirstInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: MySecondInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
