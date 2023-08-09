import { ICartItem } from '../../interfaces/cart-item.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}

export type TypeSize = 'Short' | 'Tall' | 'Grande' | 'Venti'

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
	size: TypeSize
}
