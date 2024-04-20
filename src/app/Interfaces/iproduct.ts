import { Brand } from './Brand';
import { Policy } from './Policy';
import { Seller } from './Seller';
import { SubCategory } from './SubCategory';

export interface IProduct {
  id: string;
  title: string;
  images: string[];
  brand: number;
  colors: string[];
  seller: number;
  isBestSeller: boolean;
  subCatergory: number[];
  discount: number;
  originalPrice: number;
  returnPolicy: number;
  isGiftable: boolean;
  quantity: number;
  modelNumber: string;
  aboutProduct: string;
  productSpecification: string;
  technicalDetails: string;
  shippingWeight: string;
  productDimensions: string;
  warrenty: string;
  reviews: number[];
  variants: string[];
}
