import { IProduct } from './iproduct';

export interface Order {
  id: string;
  userId: string;
  product: IProduct;
  quantity: number;
  status: string;
  pickUpOtions: number;
}
