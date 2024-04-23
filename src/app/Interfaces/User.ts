export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin: boolean;
  isSeller: boolean;
  phoneNumber: string;
  address: Address[];
  paymentMethod: PaymentMethod[];
  userListsIds: number[];
  cart: string[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: number;
  deliveryNotes: string;
}

export interface PaymentMethod {
  ccNumber: string;
  ccType: string;
}
