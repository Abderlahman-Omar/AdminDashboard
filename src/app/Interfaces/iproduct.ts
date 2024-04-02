import { Brand } from './Brand';
import { Policy } from './Policy';
import { Seller } from './Seller';
import { SubCategory } from './SubCategory';

export interface IProduct {
  id: string;
  title: string;
  images: string[];
  brand: Brand;
  colors: string[];
  seller: Seller;
  isBestSeller: boolean;
  subCatergory: SubCategory;
  discount: number;
  originalPrice: number;
  returnPolicy: Policy;
  isGiftable: boolean;
  quantity: number;
}
