import { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	title: string
}

const Title: FC<PropsType> = ({ title }) => {
	return <Heading>{title}</Heading>
}
const Heading = styled.span`
	font-size: 1.6rem;
	color: #030303;
`
export default Title
