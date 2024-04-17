import { SearchQuery } from './SearchQuery';
import { ICategory } from './icategory';

export interface Department {
  id: string;
  title: string;
  imgLink: string;
  categories: ICategory[];
  queries: SearchQuery[];
}
