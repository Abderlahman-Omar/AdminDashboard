import { SubCategory } from './SubCategory';

export interface ICategory {
  id: number;
  title: string;
  imgLink: string;
  subCategories: number[];
  carouselImg: string | null;
  carouselTitle: string | null;
}
