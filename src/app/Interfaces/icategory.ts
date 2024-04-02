import { SubCategory } from './SubCategory';

export interface ICategory {
  id: string;
  title: string;
  imgLink: string;
  subCategories: SubCategory[];
}
