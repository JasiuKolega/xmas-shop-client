import Header from '@/components/header/Header'
import Heading from '@/components/heading/Heading'
import Meta from '@/components/layout/meta/Meta'
import { FC, useState } from 'react'
import BreadCrumbComponent from './product-breadcrumb/BreadCrumbComponent'
import ProductNavigation from './product-navigation/ProductNavigation'
import ProductCard from './product-card/ProductCard'
import Catalog from '@/components/catalog/Catalog'
import Sorting from '@/components/catalog/sorting/Sorting'
import { useQuery } from 'react-query'
import { EnumSroting } from '@/interfaces/sorting.interface'
import { ProductService } from '@/services/ProductService'
import { IProduct } from '@/interfaces/product.interface'

const ProductDetails: FC<{ product: IProduct; allProducts: IProduct[] }> = ({
	product,
	allProducts
}) => {
	const [sortType, setSortType] = useState<EnumSroting>(EnumSroting.NEWEST)

	const { data } = useQuery(
		['products', sortType],
		() => ProductService.getProducts(sortType),
		{
			initialData: allProducts
		}
	)

	return (
		<div>
			<Meta title={product.name} description={product.description} />

			<div>
				<Header />

				<div>
					<Heading>Product Details</Heading>
					<BreadCrumbComponent product={product} />
					<ProductNavigation productId={product.id} />
				</div>

				<div className={'w-full flex justify-center mb-16'}>
					<ProductCard product={product} />
				</div>

				<div className={'text-right'}>
					<Sorting setSortType={setSortType} sortType={sortType} />
				</div>

				<div className={'w-full flex justify-center'}>
					<div className={'flex justify-center w-[78%]'}>
						<Catalog products={data ? data : []} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
