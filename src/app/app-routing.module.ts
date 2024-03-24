import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './dashboard/ProductsPage/products-page/products-page.component';
import { ProductDetailsComponent } from './dashboard/ProductDetails/product-details/product-details.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'productsdetails/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
