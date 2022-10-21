import styled from 'styled-components'
import Title from './header/Title'
import Navigation from './Navigation'

const Header = () => {
	return (
		<Wrapper>
			<Title />
			<Navigation />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 1rem 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export default Header
