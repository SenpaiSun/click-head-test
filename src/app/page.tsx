"use client"
import { useQuery } from "react-query";
import { getProducts } from "../api/api";
import { useActions } from "../hooks/action";

export default function Home() {
  const {data, isLoading, error, isSuccess} = useQuery({
    queryFn: () => getProducts(),
    queryKey: ["products"],
  })
console.log(data)
  const {setProducts} = useActions()
  setProducts(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Click Head Test</h1>
    </main>
  );
}
