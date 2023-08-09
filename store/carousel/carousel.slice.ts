import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICarouselInitialState } from './carousel.types'
import { cart } from '../../data/cart.data'

const initialState: ICarouselInitialState = {
	selectedItemIndex: 0
}

export const carouselSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		nextSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
			if (state.selectedItemIndex !== action.payload.carouselLength)
				state.selectedItemIndex += 1
		},
		prevSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
			if (state.selectedItemIndex > 0) state.selectedItemIndex -= 1
		},
		selectSlide: (state, action: PayloadAction<number>) => {
			state.selectedItemIndex = action.payload
		}
	}
})
