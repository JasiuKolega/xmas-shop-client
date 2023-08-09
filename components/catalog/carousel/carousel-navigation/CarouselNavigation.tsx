import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'
import cn from 'clsx'

import styles from './CarouselNavigation.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { useActions } from '@/hooks/useActions'
import { products } from '@/data/products.data'

interface ICarouselNavigation {
	selectSlide: any
	index: number
	product: IProduct
	isActive: boolean
}

const CarouselNavigation: FC<ICarouselNavigation> = ({
	product,
	isActive,
	selectSlide,
	index
}) => {
	const { prevSlide, nextSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<ChevronLeftIcon
					className={styles.arrow}
					onClick={() => prevSlide({ carouselLength: products.length })}
					fontSize={90}
				/>
			)}
			<Image
				onClick={() => selectSlide(index)}
				className={cn(styles.image, {
					[styles['image-active']]: isActive
				})}
				src={product.images[0]}
				alt={product.name}
				width={200}
				height={200}
			/>
			{isActive && (
				<ChevronRightIcon
					className={styles.arrow}
					onClick={() => nextSlide({ carouselLength: products.length })}
					fontSize={90}
				/>
			)}
		</div>
	)
}

export default CarouselNavigation
