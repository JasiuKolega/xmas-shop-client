import { FC, useState } from 'react'
import ProductInfo from './product-info/ProductInfo'
import ProductImage from './product-image/ProductImage'
import ProductVariations from './product-variations/ProductVariations'

import styles from './ProductCard.module.scss'
import { IProductDetails } from '@/pages/product/[slug]'

const ProductCard: FC<IProductDetails> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	return (
		<div className={styles.card}>
			<ProductInfo
				product={product}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>
			<ProductImage product={product} currentImageIndex={currentImageIndex} />
			<ProductVariations product={product} />
		</div>
	)
}

export default ProductCard
