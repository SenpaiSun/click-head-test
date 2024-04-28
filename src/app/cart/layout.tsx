import Cart from "./page"

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
