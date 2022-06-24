export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  isFiltered?: boolean;
}

export interface Paginator {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}
