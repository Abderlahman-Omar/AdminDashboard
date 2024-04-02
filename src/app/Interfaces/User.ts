export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin: boolean;
  phoneNumber: string;
  address?: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
    deliveryNotes: string;
  };
  paymentMethod?: {
    ccNumber: string;
    ccType: string;
  };
  userListsIds: number[];
}
