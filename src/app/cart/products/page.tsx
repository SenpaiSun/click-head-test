import { CartItem } from '@/src/components/CartItem/CartItem'
import { TotalCartInfo } from '@/src/components/TotalCartInfo/TotalCartInfo'
import Breadcrumbs from '@/src/ui/breadcrumbs/Breadcrumbs'

export default function Products() {
  return (
    <div className='flex flex-row justify-between w-full min-h-52'>
      <CartItem />
    </div>
  )
}
