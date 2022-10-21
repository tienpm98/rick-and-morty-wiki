import { FC } from 'react'
import { useQuery } from '@apollo/client'

import { GET_CHARACTERS } from 'graphql/queries/characters'
import { ICharacterData } from 'models'

import CardWrapper from 'components/CardWrapper'
import Card from 'components/Card'
import TitleWrapper from 'components/TitleWrapper'
import Title from 'components/Title'

const Characters: FC = () => {
	const { data, loading } = useQuery<ICharacterData>(GET_CHARACTERS, {
		variables: {
			page: 1,
		},
	})

	if (loading) return <p>getting characters...</p>

	return (
		<>
			<TitleWrapper>
				<Title frontTitle='Characters' />
			</TitleWrapper>
			<CardWrapper>
				{data &&
					data.characters.results.map((character) => (
						<Card key={character.id} character={character} />
					))}
			</CardWrapper>
		</>
	)
}

export default Characters
