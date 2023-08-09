import ProductDetails from '@/components/screens/product-details/ProductDetails'
import { products } from '@/data/products.data'
import { IProduct } from '@/interfaces/product.interface'
import { ProductService } from '@/services/ProductService'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

export interface IProductDetails {
	product: IProduct
}

const ProductDetailsPage: NextPage<{
	product: IProduct
	allProducts: IProduct[]
}> = ({ product, allProducts }) => {
	return (
		<main>
			<ProductDetails product={product} allProducts={allProducts} />
		</main>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = products.map(product => {
		return {
			params: {
				slug: product.slug
			}
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	const allProducts = await ProductService.getProducts()
	const product =
		products.find(product => product.slug === params?.slug) || ({} as IProduct)

	return {
		props: {
			product,
			allProducts
		}
	}
}

export default ProductDetailsPage
