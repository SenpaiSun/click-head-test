
import { getProducts } from "../../api/api";
import { useActions } from "../../hooks/action";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { Product, ProductsState } from "@/src/store/types";


export async function getData(): Promise<Product[]> {
  const products = await getProducts();

  return products;
}

export default async function CardProducts() {
const products: Product[] = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-12 md:p-24  pt-12 bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-700 mb-12">Products</h1>
      {products && products.length > 0 ? (
        products.map((product: Product) => (
          <CardProduct key={product.id} {...product} />
        ))
      ) : (
        <p>Нет доступных продуктов</p>
      )}
    </main>
  );
}
