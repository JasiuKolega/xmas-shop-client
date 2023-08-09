import { FC } from 'react'
import Head from 'next/head'

interface Props {
	title: string
	description?: string
	image?: string
}

const Meta: FC<Props> = ({ title, description, image = './logo.png' }) => {
	return (
		<div>
			{description ? (
				<Head>
					<title>{title}</title>
					<meta charSet='utf-8' />
					<meta content={title} property='og:title' />
					<meta content='width=device-width, initial-scale=1' name='viewport' />
					<meta content={description} name='description' />
					<meta content={description} property='og:description' />
					<link href={image} rel='icon' />
					<meta property='og:image' content={image} />
					<meta property='og:local' content='en' />
				</Head>
			) : (
				<Head>
					<title>{title}</title>
					<meta name='robots' content='noindex, nofollow' />
				</Head>
			)}
		</div>
	)
}

export default Meta
