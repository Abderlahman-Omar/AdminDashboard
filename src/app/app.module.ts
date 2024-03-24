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
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './dashboard/ProductDetails/product-details/product-details.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
