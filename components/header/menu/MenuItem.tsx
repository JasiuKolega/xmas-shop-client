import { FC } from 'react'
import Link from 'next/link'
import { IMenuLink } from '@/interfaces/menu-item.interface'

interface IMenuItem {
	item: IMenuLink
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li className={'tracking-widest uppercase p-6'}>
			<Link href={item.link}>{item.name}</Link>
		</li>
	)
}

export default MenuItem
