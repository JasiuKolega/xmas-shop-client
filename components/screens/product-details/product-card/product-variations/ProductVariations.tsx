import { Dispatch, FC, SetStateAction, useState } from 'react'
import ProductRating from './ProductRating'
import CarouselVariations from '@/components/catalog/carousel/carousel-variations/CarouselVariations'
import { IProductDetails } from '@/pages/product/[slug]'
import { TypeSize } from '@/store/cart/cart.types'

import styles from '../ProductCard.module.scss'
import CarouselButton from '@/components/catalog/carousel/carousel-button/CarouselButton'

const ProductVariations: FC<IProductDetails> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('Short')

	return (
		<div className={styles.variations}>
			<ProductRating product={product} />
			<CarouselVariations
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<CarouselButton variant='medium' product={product} selectedSize={selectedSize} />
		</div>
	)
}

export default ProductVariations
