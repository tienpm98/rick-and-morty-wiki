import { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	frontTitle: string
	title?: string
}
const Title: FC<PropsType> = ({ frontTitle, title }) => {
	return (
		<Heading>
			{frontTitle} <span>{title}</span>
		</Heading>
	)
}

const Heading = styled.h2`
	font-size: 2.6rem;
	span {
		color: blue;
	}
`

export default Title
