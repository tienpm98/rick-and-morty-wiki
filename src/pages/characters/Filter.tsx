import { FC } from 'react'
import styled from 'styled-components'
import { FiltersVar } from 'graphql/variables'
import {
	CHARACTER_GENDER_ARRAY,
	CHARACTER_SPECIES_ARRAY,
	CHARACTER_STATUS_ARRAY,
} from 'constant'

const Filter: FC = () => {
	const clearFilters = () => {
		FiltersVar({ ...FiltersVar(), status: '', gender: '', species: '' })
	}

	const onFilter = (e: React.ChangeEvent<HTMLSelectElement>, key: string) => {
		const filterValue = e.target.value
		FiltersVar({ ...FiltersVar(), [key]: filterValue })
	}
	console.log('filter')

	return (
		<Wrapper>
			<Block>
				<label>Filter status</label>
				<Select onChange={(e) => onFilter(e, 'status')}>
					{CHARACTER_STATUS_ARRAY.map((status) => (
						<option key={status.value}>{status.name}</option>
					))}
				</Select>
			</Block>

			<Block>
				<label>Filter gender</label>

				<Select onChange={(e) => onFilter(e, 'gender')}>
					{CHARACTER_GENDER_ARRAY.map((status) => (
						<option key={status.value}>{status.name}</option>
					))}
				</Select>
			</Block>

			<Block>
				<label>Filter Species</label>

				<Select onChange={(e) => onFilter(e, 'species')}>
					{CHARACTER_SPECIES_ARRAY.map((status) => (
						<option key={status.value}>{status.name}</option>
					))}
				</Select>
			</Block>

			<button onClick={clearFilters}>Clear filters</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 2rem;
`

const Select = styled.select`
	padding: 0.5rem;
	font-size: 1rem;
	&:focus {
		outline: none;
	}
`

const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export default Filter
