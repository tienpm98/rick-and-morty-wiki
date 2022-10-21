import { FC } from 'react'
import styled from 'styled-components'
import { ICharacter } from 'models'
import Title from './card/Title'
import LocationTitle from './card/LocationTitle'
import Tag from './card/Tag'

type PropsType = {
	character: ICharacter
}

const Card: FC<PropsType> = ({ character }) => {
	return (
		<Wrapper>
			<img src={character.image} alt={character.name} />
			<Tag name={character.status} />
			<div style={{ padding: '0.5rem 1rem' }}>
				<Title title={character.name}></Title>
			</div>
			<Description>
				<LocationHeading>Last Location</LocationHeading>
				<LocationTitle title={character.location.name} />
			</Description>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 0 0 20%;
	background: #fff;
	border-radius: 5px;
	transition: box-shadow 0.5s ease;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	&:hover {
		cursor: pointer;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
`

const Description = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`

const LocationHeading = styled.span`
	color: #606060;
	font-size: 1rem;
`

export default Card
