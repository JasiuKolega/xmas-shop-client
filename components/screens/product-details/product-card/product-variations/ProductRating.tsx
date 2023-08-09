import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import styles from '../ProductCard.module.scss'
import { IProductDetails } from '@/pages/product/[slug]'

const ProductRating: FC<IProductDetails> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		)
	)

	// // Catch Rating value
	// const handleRating = (rate: number) => {
	// 	setRating(rate)

	// 	// other logic
	// }
	// // Optinal callback functions
	// const onPointerEnter = () => console.log('Enter')
	// const onPointerLeave = () => console.log('Leave')
	// const onPointerMove = (value: number, index: number) =>
	// 	console.log(value, index)

	return (
		<div className={styles.rating}>
			<span>Review: </span>
			<Rating
			readonly
				// onClick={handleRating}
				// onPointerEnter={onPointerEnter}
				// onPointerLeave={onPointerLeave}
				// onPointerMove={onPointerMove}
				initialValue={rating}
				SVGstyle={{
					display: 'inline-block'
				}}
				allowFraction
				transition
				/* Available Props */
			/>
		</div>
	)
}

export default ProductRating
