import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IMenuItem {
	text: string
	imageSrc: string
	imageAlt: string
}

const MenuItem: FC<IMenuItem> = ({ imageSrc, imageAlt, text }) => {
	return (
		<div
			className={
				'rounded-2xl m-5 p-5 bg-light-gray shadow-md flex justify-around w-72 font-semibold'
			}
		>
			<Image
				className={'rounded-xl'}
				src={imageSrc}
				alt={imageAlt}
				width={70}
				height={70}
			/>
			<div>
				<Text>{text}</Text>
				<Link className={'flex flex-col justify-center'} href={`/${imageAlt}`}>
					<Button>
						<ArrowForwardIcon />
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default MenuItem
