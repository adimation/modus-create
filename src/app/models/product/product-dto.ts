import { ProductVariantDTO } from "./product-variant-dto";

export interface ProductDTO {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  variants: ProductVariantDTO[];
  price: string;
  tags: string[];
}
