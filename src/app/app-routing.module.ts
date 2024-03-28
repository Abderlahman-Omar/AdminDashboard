import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './dashboard/ProductsPage/products-page/products-page.component';
import { ProductDetailsComponent } from './dashboard/ProductDetails/product-details/product-details.component';
import { LoginPageComponent } from './dashboard/LoginPage/login-page/login-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './dashboard/HomePage/home-page/home-page.component';
import { AdsPageComponent } from './dashboard/AdsPage/ads-page/ads-page.component';
import { DepartmentsPageComponent } from './dashboard/DepartmentsPage/departments-page/departments-page.component';
import { OrdersPageComponent } from './dashboard/OrdersPage/orders-page/orders-page.component';
import { UsersPageComponent } from './dashboard/UsersPage/users-page/users-page.component';
import { NotFoundComponent } from './dashboard/NotFound/not-found/not-found.component';
import { CategoriesPageComponent } from './dashboard/CategoriesPage/categories-page/categories-page.component';
import { SubCategoriesPageComponent } from './dashboard/sub-categories-page/sub-categories-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'ads', component: AdsPageComponent },
      { path: 'departments', component: DepartmentsPageComponent },
      { path: 'orders', component: OrdersPageComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: 'productsdetails/:id', component: ProductDetailsComponent },
      { path: 'categories/:id', component: CategoriesPageComponent },
      { path: 'subcategories/:id', component: SubCategoriesPageComponent },
      { path: 'users', component: UsersPageComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
