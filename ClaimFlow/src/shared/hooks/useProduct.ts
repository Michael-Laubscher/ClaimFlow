import { products } from "@/features/shared-ui/configs/products.config";

export function useProduct(productId?: string) {
  return products.find((product) => product.id === productId);
}
