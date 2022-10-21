import { FC } from 'react'
import { useQuery, useReactiveVar } from '@apollo/client'

import { GET_CHARACTERS } from 'graphql/queries'
import { searchKeyVar } from 'graphql/variables'
import { ICharacterData } from 'models'

import CardWrapper from 'components/CardWrapper'
import Card from 'components/Card'
import TitleWrapper from 'components/TitleWrapper'
import Title from 'components/Title'
import Search from 'components/Search'

const CharacterList = () => {
	const searchKey = useReactiveVar(searchKeyVar)

	const { data, loading } = useQuery<ICharacterData>(GET_CHARACTERS, {
		variables: {
			page: 1,
			filter: {
				name: searchKey,
			},
		},
	})

	if (loading) return <p>getting characters...</p>

	return (
		<CardWrapper>
			{data &&
				data.characters.results.map((character) => (
					<Card key={character.id} character={character} />
				))}
		</CardWrapper>
	)
}

const Characters: FC = () => {
	return (
		<>
			<TitleWrapper>
				<Title frontTitle='Characters' />
				<Search />
			</TitleWrapper>
			<CharacterList />
		</>
	)
}

export default Characters
