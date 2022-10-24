import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from 'constant'

const paths = [
	{
		path: '/characters',
		title: 'Characters',
		end: true,
	},
	{
		path: 'episodes',
		title: 'Episodes',
		end: true,
	},
	{
		path: 'location',
		title: 'Location',
		end: true,
	},
]

const Navigation = () => {
	return (
		<Wrapper>
			{paths.map((link) => (
				<NavLink
					key={link.path}
					to={link.path}
					end={link.end}
					style={({ isActive }) => (isActive ? activeStyles : defaultStyles)}
				>
					{link.title}
				</NavLink>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 2rem;
`

const activeStyles = {
	fontSize: '20px',
	color: COLORS.BLUE,
	textDecoration: 'underline',
}

const defaultStyles = {
	fontSize: '20px',
	color: '#000',
	textDecoration: 'none',
}

export default Navigation
