"use client"
import { useQuery } from "react-query";
import { getProducts } from "../api/api";
import { useActions } from "../hooks/action";
import { useAppSelector } from "../hooks/redux";
import { CardProduct } from "../components/CardProduct/CardProduct";
import Loader from "../ui/loader/loader";

export default function Home() {
  const {setProducts} = useActions()
  const {isLoading, error, isSuccess} = useQuery({
    queryFn: () => getProducts(),
    queryKey: ["products"],
    onSuccess(data) {
      setProducts(data)
    },
  })
  const products = useAppSelector((state) => state.products.products)
  console.log(products)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {isLoading ? <Loader /> : (products.map((product) => (
        <CardProduct key={product.id} {...product}/>
      )))}
    </main>
  );
}
