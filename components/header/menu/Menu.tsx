import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menu } from '../../../data/menu.data'
import MenuItem from './MenuItem'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<div className={`flex items-center gap-10 ${styles.menu}`}>
			<Link href='/'>
				<Image src='/logo.png' alt='logo' width={100} height={100} />
			</Link>

			<nav>
				<ul className={'flex items-center gap-4'}>
					{menu.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Menu
