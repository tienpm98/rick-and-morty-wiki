import { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	title: string
}

const Title: FC<PropsType> = ({ title }) => {
	return <Heading>{title}</Heading>
}
const Heading = styled.span`
	display: inline-block;
	font-size: 1.6rem;
	color: #030303;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 350px;
`
export default Title
