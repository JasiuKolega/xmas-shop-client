import { products } from '@/data/products.data'

export const useProductNavigation = (productId: number) => {
	const nextProductSlug = products.find(
		product => product.id === productId + 1
	)?.slug
	const prevProductSlug = products.find(
		product => product.id === productId - 1
	)?.slug

	return {
		nextProductSlug,
		prevProductSlug
		// isNextDisabled: productId === products.length,
		// isPrevDisabled: productId === 1
	}
}
