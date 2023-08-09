import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { FC } from 'react'
import { useProductNavigation } from './useProductNavigation'
import cn from 'clsx'

import styles from './ProductNavigation.module.scss'

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
	const { nextProductSlug, prevProductSlug } = useProductNavigation(productId)

	return (
		<div className={styles.nav}>
			<Link
				href={`/product/${prevProductSlug}`}
				color={'#444'}
				className={cn({
					disabled: !prevProductSlug
				})}
			>
				<ChevronLeftIcon />
			</Link>
			<Link
				href={`/product/${nextProductSlug}`}
				color={'#444'}
				className={cn({
					disabled: !nextProductSlug
				})}
			>
				<ChevronRightIcon />
			</Link>
		</div>
	)
}

export default ProductNavigation
