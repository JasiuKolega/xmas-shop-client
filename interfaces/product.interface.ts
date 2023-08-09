import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	//TODO: Add review interface
	reviews: IReview[]
	images: string[]
}

export type sortType = 'newest' | 'oldest' | 'low-to-high' | 'high-to-low'
