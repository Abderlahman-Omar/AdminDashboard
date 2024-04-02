import { IProduct } from './iproduct';

export interface Cart {
  userId: string;
  items: CartItem[];
  pickUpOtions: number;
}

export interface CartItem {
  id: string;
  product: IProduct;
  quantity: number;
}
