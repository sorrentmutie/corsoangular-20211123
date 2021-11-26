import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/components/hero-form/hero-form.component';
import { HeroReactiveFormComponent } from './hero-reactive/hero-reactive-form/hero-reactive-form.component';
import { ProductDetailsComponent } from './products-catalog/components/product-details/product-details.component';
import { SpecialOffersComponent } from './products-catalog/pages/special-offers/special-offers.component';
import { RandomUserListComponent } from './random-users/components/random-user-list/random-user-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { TestFormComponent } from './shared/components/test-form/test-form.component';

const routes: Routes = [
  {path: 'products', component:SpecialOffersComponent },
  {path: 'products/:id', component:ProductDetailsComponent },
  {path: 'randomuser', component: RandomUserListComponent},
  {path: 'heroform', component: HeroFormComponent},
  {path: 'test', component: TestFormComponent},
  {path: 'heroreactiveform', component: HeroReactiveFormComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
