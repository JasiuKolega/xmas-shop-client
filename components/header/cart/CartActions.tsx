import { FC } from 'react'
import {
	useNumberInput,
	HStack,
	Input
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useActions } from '../../../hooks/useActions'
import { useCart } from '../../../hooks/useCart'
import { ICartItem } from '../../../interfaces/cart-item.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			max: 15
		})

	const { changeQuantity } = useActions()
	const { cart } = useCart()

	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	return (
		<div>
			<HStack maxW='320px'>
				<button
					{...dec}
					className={'w-10 h-[38px] bg-[#eef2f7] rounded-md hover:bg-[#E3E7F0] easy-in-out duration-300'}
					disabled={quantity === 1}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					
				>
					<MinusIcon fontSize={10} />
				</button>
				<Input
					{...input}
					width={'55px'}
					textAlign={'center'}
					focusBorderColor={'green.400'}
					readOnly
					_hover={{
						cursor: 'default'
					}}
					value={quantity}
				/>
				<button
					{...inc}
					className={'w-10 h-[38px] bg-[#eef2f7] rounded-md hover:bg-[#E3E7F0] easy-in-out duration-300'}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					disabled={quantity === 10}
				>
					<AddIcon fontSize={10} />
				</button>
			</HStack>
		</div>
	)
}

export default CartActions
