export interface ProductPreviewSliceState {
  products: Product[];
}

type Size = {
  title?: string;
  amount?: number;
};

export type Product = {
  _id: object;
  category: string[];
  price: {
    base: number;
    currency: string;
  };
  options: {
    sizes?: Size[];
    features?: string[];
    colors?: string[];
    images?: string[];
  };
  title: string;
  link: string;
};
