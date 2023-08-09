import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { cartSlice } from '../store/cart/cart.slice'
import { carouselSlice } from '@/store/carousel/carousel.slice'

const rootAction = {
	...cartSlice.actions,
	...carouselSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
