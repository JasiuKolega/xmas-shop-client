import { IProductDetails } from '@/pages/product/[slug]'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'clsx'
import styles from '../ProductCard.module.scss'

interface IProductInfo extends IProductDetails {
	currentImageIndex: number
	setCurrentImageIndex: Dispatch<SetStateAction<number>>
}

const ProductInfo: FC<IProductInfo> = ({
	product,
	currentImageIndex,
	setCurrentImageIndex
}) => {
	return (
		<div className={styles.info}>
			<h2>{product.name}</h2>

			<div>
				<p>{product.description}</p>
			</div>

			<div>
				{product.images.map((image, index) => (
					<button key={image} onClick={() => setCurrentImageIndex(index)} className={cn({
						[styles.active]: index === currentImageIndex
					})}>
						<Image src={image} alt={''} width={70} height={70} />
					</button>
				))}
			</div>
		</div>
	)
}

export default ProductInfo
