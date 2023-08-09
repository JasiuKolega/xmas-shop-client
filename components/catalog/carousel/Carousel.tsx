import { IProduct } from '@/interfaces/product.interface'
import { FC } from 'react'
import CarouselItem from './carousel-item/CarouselItem'

const Carousel: FC<{ products: IProduct[] | [] }> = ({ products }) => {
	return (
		<section className={'pt-10 grid grid-cols-4 gap-10'}>
			{products.map((product, index) => (
				<CarouselItem key={product.id} product={product} index={index} />
			))}
		</section>
	)
}

export default Carousel
