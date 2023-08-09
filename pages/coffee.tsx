import { ProductService } from '@/services/ProductService'
import { GetStaticProps, NextPage } from 'next'
import { IProductsPage } from '.'
import Coffee from '@/components/screens/coffee/Coffee'

const CoffeePage: NextPage<IProductsPage> = ({ products }) => {
	return <Coffee products={products} />
}

export default CoffeePage

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: { products }
	}
}
