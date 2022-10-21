import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const TitleWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}
const Wrapper = styled.div`
	padding-bottom: 2rem;
	text-align: center;
`
export default TitleWrapper
