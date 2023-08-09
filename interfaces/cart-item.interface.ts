import { TypeSize } from '@/store/cart/cart.types'
import { IProduct } from './product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	size: TypeSize
}
