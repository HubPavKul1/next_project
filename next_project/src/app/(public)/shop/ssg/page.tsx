import { ProductCard, type IProduct } from "@/src/components/ProductCard";
import { API_URL } from "@/src/constants";

export default async function ShopSSGPage() {
  const response = await fetch(API_URL);
  const products = (await response.json()) as IProduct[];
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
