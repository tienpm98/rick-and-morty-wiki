import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = () => {
	return (
		<Paragraph to='/'>
			Rick & Morty <span>Wiki</span>
		</Paragraph>
	)
}

const Paragraph = styled(Link)`
	font-size: 1.75rem;
	color: #000;
	text-decoration: none;
	span {
		color: rgb(13, 110, 253);
	}
`

export default Title
