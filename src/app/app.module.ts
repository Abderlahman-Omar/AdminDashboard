import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsPageComponent } from './dashboard/AdsPage/ads-page/ads-page.component';
import { DepartmentsPageComponent } from './dashboard/DepartmentsPage/departments-page/departments-page.component';
import { HomePageComponent } from './dashboard/HomePage/home-page/home-page.component';
import { LoginPageComponent } from './dashboard/LoginPage/login-page/login-page.component';
import { OrdersPageComponent } from './dashboard/OrdersPage/orders-page/orders-page.component';
import { ProductsPageComponent } from './dashboard/ProductsPage/products-page/products-page.component';
import { UsersPageComponent } from './dashboard/UsersPage/users-page/users-page.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ProductDetailsComponent } from './dashboard/ProductDetails/product-details/product-details.component';
import { RouterLink, RouterLinkActive, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/SideBar/side-bar/side-bar.component';
import { TopBarComponent } from './components/TopBar/top-bar/top-bar.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './dashboard/NotFound/not-found/not-found.component';
import { CategoriesPageComponent } from './dashboard/CategoriesPage/categories-page/categories-page.component';
import { SubCategoriesPageComponent } from './dashboard/sub-categories-page/sub-categories-page.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdsPageComponent,
    DepartmentsPageComponent,
    HomePageComponent,
    LoginPageComponent,
    OrdersPageComponent,
    ProductsPageComponent,
    UsersPageComponent,
    ProductDetailsComponent,
    SideBarComponent,
    TopBarComponent,
    MainLayoutComponent,
    NotFoundComponent,
    CategoriesPageComponent,
    SubCategoriesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
