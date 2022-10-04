type Size = {
  title?: string;
  amount?: number;
};

export interface Product {
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
}

export interface Navigation {}
