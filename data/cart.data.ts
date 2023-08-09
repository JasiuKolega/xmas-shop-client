import { ICartItem } from '../interfaces/cart-item.interface'
import { products } from './products.data'

export const cart: ICartItem[] = [
	{
		id: 1,
		quantity: 1,
		product: products[0],
		size: 'Grande'
	},
	{
		id: 2,
		quantity: 1,
		product: products[1],
		size: 'Short'
	},
	{
		id: 3,
		quantity: 1,
		product: products[2],
		size: 'Venti'
	}
]
