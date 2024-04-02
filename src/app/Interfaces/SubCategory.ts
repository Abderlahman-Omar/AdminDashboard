import { SearchQuery } from './SearchQuery';

export interface SubCategory {
  id: string;
  title: string;
  imgLink: string;
  queries: SearchQuery[];
}
