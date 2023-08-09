import React, { Dispatch, FC, SetStateAction } from 'react'
import { Button } from '@chakra-ui/react'
import styles from './CarouselVariations.module.scss'
import cn from 'clsx'
import { TypeSize } from '@/store/cart/cart.types'

interface ICarouselVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
	variant?: 'small' | 'medium'
}

const SIZES: TypeSize[] = ['Short', 'Tall', 'Grande', 'Venti']

const CarouselVariations: FC<ICarouselVariations> = ({
	selectedSize,
	setSelectedSize,
	variant = 'small'
}) => {
	return (
		<div
			className={cn(styles.variations, {
				[styles.medium]: variant === 'medium'
			})}
		>
			{SIZES.map(size => (
				<Button
					key={size}
					_hover={{
						bgColor: 'transparent'
					}}
					className={cn(styles.button, {
						[styles.active]: selectedSize === size
					})}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</Button>
			))}
		</div>
	)
}

export default CarouselVariations
