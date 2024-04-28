import Breadcrumbs from "@/src/ui/breadcrumbs/Breadcrumbs"
import Cart from "./page"
import { CartItem } from "@/src/components/CartItem/CartItem"

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Cart>
        {children}
      </Cart>
    </div>
  )
}
