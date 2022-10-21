import { FC, useRef } from 'react'
import styled from 'styled-components'
import { searchKeyVar } from 'graphql/variables'
import { COLORS } from 'constant'

const Search: FC = () => {
	let filterTimeout: string | number | NodeJS.Timeout | undefined
	const inputRef = useRef<any>(null)

	const debounceSearch = (searchKey: string) => {
		clearTimeout(filterTimeout)
		filterTimeout = setTimeout(() => {
			searchKeyVar(searchKey)
		}, 2000)
	}

	const onChange = () => {
		debounceSearch(inputRef.current.value)
	}

	return (
		<Input
			ref={inputRef}
			type='text'
			onChange={onChange}
			placeholder='Search characters...'
		/>
	)
}

const Input = styled.input`
	border-radius: 5px;
	border: 1px solid ${COLORS.BLUE};
	padding: 0.75rem;
	font-size: 1.25rem;
	&:focus {
		outline: none;
	}
`

export default Search
