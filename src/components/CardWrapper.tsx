import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const CardWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`

export default CardWrapper
