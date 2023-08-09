import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/interfaces/product.interface'
import { TypeSize } from '@/store/cart/cart.types'
import { Button } from '@chakra-ui/react'
import { current } from '@reduxjs/toolkit'
import { FC } from 'react'

interface ICarouselButton {
	product: IProduct
	selectedSize: TypeSize
	variant?: 'small' | 'medium'
}

const CarouselButton: FC<ICarouselButton> = ({
	product,
	selectedSize,
	variant = 'small'
}) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()

	const currentElement = cart.find(
		cartItem =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)

	const isSmall = variant === 'small'

	return (
		<div>
			<Button
				padding={5}
				borderRadius={'20px'}
				fontSize={isSmall ? '12px' : '16px'}
				fontWeight={400}
				color={isSmall ? undefined : '#fff'}
				bgColor={isSmall ? undefined : '#008d64'}
				_hover={isSmall ? undefined : {
					backgroundColor: '#79906C'
				}}
				className={'w-full tracking-widest uppercase'}
				onClick={() =>
					currentElement
						? removeFromCart({
								id: currentElement.id
						  })
						: addToCart({
								product,
								quantity: 1,
								size: selectedSize
						  })
				}
			>
				{currentElement ? 'Remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}

export default CarouselButton
