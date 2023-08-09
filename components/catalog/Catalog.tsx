import { FC } from 'react'
import Carousel from './carousel/Carousel'
import { IProduct } from '@/interfaces/product.interface'

const Catalog: FC<{ products: IProduct[] | [] }> = ({ products }) => {
	return (
		<div>
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
