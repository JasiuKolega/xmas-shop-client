import { IProductDetails } from '@/pages/product/[slug]'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FC } from 'react'

const BreadCrumbComponent: FC<IProductDetails> = ({ product }) => {
	return (
		<Breadcrumb
			className={'flex relative justify-end uppercase tracking-widest text-xs'}
			color={'darkgray'}
		>
			<BreadcrumbItem>
				<BreadcrumbLink href='/' color={'lightgray'}>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href='#'>{product.name}</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	)
}

export default BreadCrumbComponent
