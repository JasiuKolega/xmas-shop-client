import { FC, useRef } from 'react'
import {
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerFooter,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Stack,
	StackDivider
} from '@chakra-ui/react'
import CartItem from './CartItem'
import { useCart } from '../../../hooks/useCart'

const Cart: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	const { cart, total } = useCart() 

	//TODO: add redux //// Complited

	return (
		<div className={'relative'}>
			<button className={'flex items-center'} onClick={onOpen}>
				<span
					className={
						'flex h-5 w-5 mr-1 text-sm items-center justify-center text-white rounded-full bg-red'
					}
				>
					{cart.length}
				</span>
				<span className={'tracking-widest uppercase'}>My basket</span>
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My bascket</DrawerHeader>

					<DrawerBody>
						{cart.length ? (
							<Stack divider={<StackDivider borderColor={'#F7F4F0'} />}>
								{cart.map(item => (
									<CartItem key={item.id} item={item} />
								))}
							</Stack>
						) : (
							<div className={'w-full h-full flex items-center justify-center'}>
								<h1>You have no items in your basket</h1>
							</div>
						)}
					</DrawerBody>

					<DrawerFooter
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
						borderTopWidth={1}
						borderTopColor={'#F7F4F0'}
					>
						<div>
							<div className={'text-sm'}>Total: </div>
							<div className={'text-lg font-semibold'}>
								{new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD'
								}).format(total)}
							</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart