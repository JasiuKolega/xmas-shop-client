import { FC, useState } from 'react'
import Header from '../../header/Header'
import Catalog from '../../catalog/Catalog'
import Heading from '../../heading/Heading'
import Sorting from '../../catalog/sorting/Sorting'
import { EnumSroting } from '@/interfaces/sorting.interface'
import { IProductsPage } from '@/pages'
import { ProductService } from '@/services/ProductService'
import { useQuery } from 'react-query'
import { Spinner } from '@chakra-ui/react'

const Home: FC<IProductsPage> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSroting>(EnumSroting.NEWEST)

	const { data, isLoading } = useQuery(
		['products', sortType],
		() => ProductService.getProducts(sortType),
		{
			initialData: products
		}
	)

	return (
		<div>
			<Header />
			<Heading>The happiest hour of the year</Heading>
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
		</div>
	)
}

export default Home
