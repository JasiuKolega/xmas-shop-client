import Header from '@/components/header/Header'
import Heading from '@/components/heading/Heading'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

const Tea: FC = () => {
	return (
		<main>
			<Header />
			<Heading>Catalog of coffee</Heading>
			<div className={'flex justify-center'}>
				<Text fontSize={24} fontWeight={600} opacity={0.4} pt={5}>
					So far there is no tea
				</Text>
				<Link href={'/'}>
					<Button m={5}>
						<ArrowBackIcon />
					</Button>
				</Link>
			</div>
		</main>
	)
}

export default Tea
