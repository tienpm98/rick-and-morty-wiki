import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'

const Layout = () => {
	return (
		<Wrapper>
			<Header />
			<Container>
				<Content>
					<Outlet />
				</Content>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 69px);
`

const Container = styled.div`
	display: flex;
	background: #eeeeee;
	height: 100%;
`

const Content = styled.div`
	width: 100%;
	padding: 2rem;
	overflow-y: auto;
`

export default Layout
