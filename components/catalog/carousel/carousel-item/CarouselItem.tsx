import { IProduct } from '@/interfaces/product.interface'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import cn from 'clsx'
import styles from './CarouselItem.module.scss'
import { useActions } from '@/hooks/useActions'
import CarouselVariants from '../carousel-variations/CarouselVariations'
import { TypeSize } from '@/store/cart/cart.types'
import CarouselButton from '../carousel-button/CarouselButton'
import CarouselNavigation from '../carousel-navigation/CarouselNavigation'
import { useCarousel } from '@/hooks/useCarousel'
import { motion } from 'framer-motion'
import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'

interface ICarouselItem {
	product: IProduct
	index: number
}

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('Short')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex

	return (
		<motion.div
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.1 } : {}}
			transition={{ duration: 0.4, type: 'spring' }}
			aria-label='Select item'
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			<div className={'p-5'}>
				<div
					className={cn('w-full flex justify-center', {
						'': index === selectedItemIndex
					})}
				>
					<CarouselNavigation
						product={product}
						isActive={isActive}
						selectSlide={selectSlide}
						index={index}
					/>
				</div>

				<div
					className={cn(styles.name, {
						[styles['name-active']]: isActive
					})}
				>
					{product.name}
				</div>

				{isActive ? (
					<div>
						<div className={'pt-10'}>
							<CarouselVariants
								selectedSize={selectedSize}
								setSelectedSize={setSelectedSize}
							/>
						</div>

						{/* TODO: Change add to basket to delete from basket */}
						<div className={'pt-4'}>
							<CarouselButton product={product} selectedSize={selectedSize} />
							<Link href={`/product/${product.slug}`} className={'flex justify-center'}>
								<Box
									paddingTop={2}
									fontSize={'12px'}
									fontWeight={400}
									className={`inline tracking-widest uppercase ${styles.link}`}
								>
									View details
								</Box>
							</Link>
						</div>
					</div>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
