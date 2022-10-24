import { FC } from 'react'
import styled from 'styled-components'
import { COLORS } from 'constant'
import usePagination from 'hooks/usePagination'

const Pagination: FC = () => {
	const { page, setPage } = usePagination()
	const onPrevious = () => {
		setPage(page - 1)
	}

	const onNext = () => {
		setPage(page + 1)
	}

	return (
		<Wrapper>
			<Button onClick={onPrevious} disabled={page <= 1}>
				Previous
			</Button>
			<span className='page-counter'>Page: {page}</span>
			<Button onClick={onNext}>Next</Button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
	padding: 1rem;
	gap: 1rem;
	align-items: center;

	.page-counter {
		font-size: 1rem;
	}
`

const Button = styled.button`
	color: white;
	background: ${COLORS.BLUE};
	padding: 0.5rem;
	width: 5rem;
	outline: none;
	cursor: pointer;
	border: none;
	font-size: 1rem;
	border-radius: 4px;

	&:disabled {
		background: gray;
	}
`

export default Pagination
