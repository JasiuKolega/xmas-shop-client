import { sortingData } from '@/data/sorting.data'
import { EnumSroting } from '@/interfaces/sorting.interface'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISorting {
	sortType: EnumSroting
	setSortType: Dispatch<SetStateAction<EnumSroting>>
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{sortingData.find(sort => sort.value === sortType)?.label}
			</MenuButton>
			<MenuList>
				{sortingData.map(sort => (
					<MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default Sorting
