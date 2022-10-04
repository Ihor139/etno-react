type Size = {
  title?: string;
  amount?: number;
};

export type Product = {
  _id: string;
  category: string[];
  price: {
    base: number;
    currency: string;
  };
  options: {
    sizes: Size[];
    features: string[];
    colors: string[];
    images: string[];
  };
  title: string;
  link: string;
};

export interface SearchSliceState {
  value: string;
  result: Product[];
  status: string;
}
