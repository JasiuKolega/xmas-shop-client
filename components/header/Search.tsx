import { FC, useState, useRef } from 'react'
import { Input, Button, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useQuery } from 'react-query'
import { ProductService } from '@/services/ProductService'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { data } = useQuery(['products', searchTerm], () =>
		ProductService.bySearchTerm(searchTerm.toLowerCase())
	)
	console.log(data)

	return (
		<div className={'flex justify-center'}>
			<div
				className={
					'absolute z-0 -top-[230px] w-[700px] h-[700px] rounded-full bg-light-gray-xl'
				}
			></div>

			<div className={'z-10 w-full flex tracking-widest uppercase'}>
				<InputGroup width={'500px'}>
					<InputLeftElement pointerEvents='none'>
						<SearchIcon color='gray.500' />
					</InputLeftElement>
					<Input
						variant='flushed'
						letterSpacing={'0.1em'}
						textTransform={'uppercase'}
						type='tel'
						_focus={{ borderColor: 'green.300' }}
						placeholder='Search'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</InputGroup>
			</div>
		</div>
	)
}

export default Search
