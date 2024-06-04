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
import { AddProductPageComponent } from './dashboard/AddProductPage/add-product-page/add-product-page.component';
import { UpdateProductPageComponent } from './dashboard/UpdateProductPage/update-product-page/update-product-page.component';
import { authGuardGuard } from './guards/Auth-Guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    // canActivate: [authGuardGuard],

    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        // canActivate: [authGuardGuard],
        component: HomePageComponent,
      },
      {
        path: 'ads',
        // canActivate: [authGuardGuard],
        component: AdsPageComponent,
      },
      {
        path: 'departments',
        // canActivate: [authGuardGuard],
        component: DepartmentsPageComponent,
      },
      {
        path: 'orders',
        // canActivate: [authGuardGuard],
        component: OrdersPageComponent,
      },
      {
        path: 'products',
        // canActivate: [authGuardGuard],
        component: ProductsPageComponent,
      },
      {
        path: 'productsdetails/:id',
        // canActivate: [authGuardGuard],
        component: ProductDetailsComponent,
      },
      {
        path: 'addproduct',
        // canActivate: [authGuardGuard],
        component: AddProductPageComponent,
      },
      {
        path: 'updateproduct/:id',
        // canActivate: [authGuardGuard],
        component: UpdateProductPageComponent,
      },

      {
        path: 'categories/:id',
        // canActivate: [authGuardGuard],
        component: CategoriesPageComponent,
      },
      {
        path: 'subcategories/:id',
        // canActivate: [authGuardGuard],
        component: SubCategoriesPageComponent,
      },
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
