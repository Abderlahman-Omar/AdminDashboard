export interface Filter {
  query?: string;
  priceMin?: number;
  priceMax?: number;
  isBestSeller: boolean;
  isGiftable: boolean;
  onlyAvailabe: boolean;
  returnIdxList: number[];
  pageIdx: number;
}
