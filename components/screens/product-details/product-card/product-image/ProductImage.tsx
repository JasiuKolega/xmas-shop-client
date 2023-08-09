import { IProductDetails } from '@/pages/product/[slug]'
import Image from 'next/image'
import { FC } from 'react'

import styles from '../ProductCard.module.scss'
import { formatToCurrency } from '@/utils/format-to-currency'

interface IProductImage extends IProductDetails {
	currentImageIndex: number
}

const ProductImage: FC<IProductImage> = ({ product, currentImageIndex }) => {
	return (
		<div className={styles.image}>
			<div>
				<Image
					src={product.images[currentImageIndex]}
					alt={product.name}
					width={250}
					height={250}
				/>

				<div>{formatToCurrency(product.price)}</div>
			</div>
		</div>
	)
}

export default ProductImage
