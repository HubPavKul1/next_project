import { ProductCard, type IProduct } from "@/src/components/ProductCard";
import { API_URL } from "@/src/constants";


// Преимущество получения данных по ISR всегда актуальные данные, нет нагрузки на сервер,
// Обновление данных без пересборки

export default async function ShopIsrPage() {
 const response = await fetch(API_URL, {next: {revalidate: 300}}); // обновление запроса каждые 300с
   const products = (await response.json()) as IProduct[];
   return (
     <div className="grid grid-cols-2 gap-4">
       {products.map((product) => (
         <ProductCard key={product.id} {...product} />
       ))}
     </div>
   );
}
