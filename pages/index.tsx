import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Home from '../components/screens/home/Home'
import Meta from '@/components/layout/meta/Meta'
import { IProduct } from '@/interfaces/product.interface'
import { ProductService } from '@/services/ProductService'

export interface IProductsPage {
	products: IProduct[]
}

const HomePage: NextPage<IProductsPage> = ({ products }) => {
	return (
		<main>
			<Meta
				title='Home | Xmas-Shop'
				description={
					'More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
				}
			/>

			<div>
				<Home products={products} />
			</div>
		</main>
	)
}

export default HomePage

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: { products }
	}
}
