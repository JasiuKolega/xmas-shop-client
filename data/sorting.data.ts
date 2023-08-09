import { EnumSroting, ISortingItem } from '@/interfaces/sorting.interface'

export const sortingData: ISortingItem[] = [
	{
		label: 'Newest',
		value: EnumSroting.NEWEST
	},
	{
		label: 'Oldest',
		value: EnumSroting.OLDEST
	},
	{
		label: 'Price: high to low',
		value: EnumSroting.HIGH_TO_LOW_PRICE
	},
	{
		label: 'Price: low to high',
		value: EnumSroting.LOW_TO_HIGH_PRICE
	}
]
