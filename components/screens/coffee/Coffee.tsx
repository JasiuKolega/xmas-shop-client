import Catalog from '@/components/catalog/Catalog'
import Sorting from '@/components/catalog/sorting/Sorting'
import Header from '@/components/header/Header'
import Heading from '@/components/heading/Heading'
import { IProduct } from '@/interfaces/product.interface'
import { EnumSroting } from '@/interfaces/sorting.interface'
import { ProductService } from '@/services/ProductService'
import { Spinner } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'

const Coffee: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSroting>(EnumSroting.NEWEST)

	const { data, isLoading } = useQuery(
		['products', sortType],
		() => ProductService.getProducts(sortType),
		{
			initialData: products
		}
	)

	return (
		<main>
			<Header />
			<Heading>Catalog of coffee</Heading>
			<div className={'text-right'}>
				<Sorting sortType={sortType} setSortType={setSortType} />
			</div>
			<div className={'flex justify-center'}>
				<div className={'relative w-[78%]'}>
					{isLoading ? (
						<Spinner
							thickness='4px'
							speed={'0.65s'}
							emptyColor='gray.200'
							color='#008d64'
							size='xl'
							display={'block'}
							className={'mx-auto'}
						/>
					) : (
						<Catalog products={data ? data : []} />
					)}
				</div>
			</div>
		</main>
	)
}

export default Coffee
