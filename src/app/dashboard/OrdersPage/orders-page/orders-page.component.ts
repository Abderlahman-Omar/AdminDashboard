import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/Orders.service';
import { Order } from '../../../Interfaces/Order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css',
})
export class OrdersPageComponent implements OnInit {
  orderList: any[] = [];
  constructor(private ordersService: OrdersService) {}
  ngOnInit(): void {
    this.updateLocalData();
  }
  async updateLocalData() {
    const { ordersData, error } = await this.ordersService.getAllOrders();
    if (ordersData) {
      this.orderList = ordersData;
      // this.onClear();
      console.log(ordersData);
    }
  }

  // onClear() {
  //   this.selectedId = null;
  //   this.adTitleInput = '';
  //   this.adImageInput = '';
  //   this.isLoadingPage = false;
  //   this.isLoadingModal = false;
  // }
}
