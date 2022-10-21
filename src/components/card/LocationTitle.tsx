import { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	title: string
}
const LocationTitle: FC<PropsType> = ({ title }) => {
	return <Heading>{title}</Heading>
}
const Heading = styled.span`
	font-size: 1.25rem;
	color: #606060;
`
export default LocationTitle
