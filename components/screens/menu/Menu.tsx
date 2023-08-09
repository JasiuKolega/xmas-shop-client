import { FC } from 'react'
import MenuItem from './MenuItem'
import Header from '@/components/header/Header'
import Heading from '@/components/heading/Heading'

const Menu: FC = () => {
	return (
		<main className={'min-h-screen'}>
			<Header />
			<Heading>Menu</Heading>
			<div className={'w-full flex justify-center'}>
				<div className={'block'}>
					<MenuItem
						imageAlt='tea'
						imageSrc='/menu/tea.webp'
						text='Catalog of tea'
					/>
					<MenuItem
						imageAlt='coffee'
						imageSrc='/menu/coffee.webp'
						text='Catalog of coffee'
					/>
				</div>
			</div>
		</main>
	)
}

export default Menu
