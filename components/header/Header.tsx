import { FC } from 'react'
import Menu from './menu/Menu'
import Search from './Search'
import Cart from './cart/Cart'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Cart />
		</header>
	)
}

export default Header
