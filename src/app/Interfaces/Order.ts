export interface Order {
  id: number;
  userId: string;
  productId: string;
  status: string;
  pickUpOtions: number;
  quantity: number;
  createdAt: Date;
  lastEditAt: Date;
  arrivingAt: Date;
}
