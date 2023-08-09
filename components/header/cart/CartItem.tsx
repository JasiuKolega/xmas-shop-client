import { FC } from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { ICartItem } from '../../../interfaces/cart-item.interface'
import CartActions from './CartActions'
import { useActions } from '../../../hooks/useActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart } = useActions()

	return (
		<>
			<div className={'mb-2 mt-2 flex items-center gap-5'}>
				<Image
					className={'rounded-xl'}
					src={item.product.images[0]}
					alt={item.product.name}
					width={100}
					height={100}
				/>

				<div>
					<div className={'font-semibold tracking-widest w-36 truncate'}>
						{item.product.name}
					</div>
					<div className={'flex items-center justify-between'}>
						<div className={'mt-1 text-sm text-dark-gray'}>
							{new Intl.NumberFormat('en-US', {
								style: 'currency',
								currency: 'USD'
							}).format(item.product.price)}
						</div>
						<div className={'mt-1 text-sm font-bold text-dark-gray'}>
							{item.size}
						</div>
					</div>
					<CartActions item={item} />
				</div>
			</div>

			<Button onClick={() => removeFromCart({ id: item.id })} height={'35px'}>
				Remove
			</Button>
		</>
	)
}

export default CartItem
