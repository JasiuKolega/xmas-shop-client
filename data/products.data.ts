import { IProduct } from '../interfaces/product.interface'
import { reviews } from './reviews.data'

export const products: IProduct[] = [
	{
		id: 1,
		description:
			'Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, whipped cream and buttery caramel sauce.',
		name: 'Caramel Frappuccino',
		slug: 'caramel-frappuccino',
		images: [
			'/products/frappuccino.webp',
			'/products/frappuccino_2.webp',
			'/products/frappuccino_3.webp'
		],
		price: 13,
		reviews: [reviews[0], reviews[1], reviews[2]]
	},
	{
		id: 2,
		description:
			'Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice.',
		name: 'Mocha Cookie Crumble Frappuccino',
		slug: 'mocha-cookie-crumble-frappuccino',
		images: [
			'/products/mocha-cookie.webp',
			'/products/mocha-cookie_2.webp',
			'/products/mocha-cookie_3.webp'
		],
		price: 11,
		reviews: []
	},
	{
		id: 3,
		description:
			'Xmas signature cold brew sweetened with macadamia syrup, topped with a silky white-chocolate.',
		name: 'White Chocolate Macadamia Cream',
		slug: 'white-chocolate-macadamia-cream',
		images: [
			'/products/cold-coffee.webp',
			'/products/cold-coffee_2.webp',
			'/products/cold-coffee_3.webp'
		],
		price: 13,
		reviews: []
	},
	{
		id: 4,
		description:
			'We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream.',
		name: 'Java Chip Frappuccino® Blended Beverage',
		slug: 'java-chip-frappuccino-blended-beverage',
		images: [
			'/products/java-chip-frappuccino.webp',
			'/products/java-chip-frappuccino_2.webp',
			'/products/java-chip-frappuccino_3.webp'
		],
		price: 16,
		reviews: []
	}
]
