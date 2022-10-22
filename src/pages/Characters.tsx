import { FC } from 'react'
import { NetworkStatus, useQuery, useReactiveVar } from '@apollo/client'

import { GET_CHARACTERS } from 'graphql/queries'
import { FiltersVar } from 'graphql/variables'
import { ICharacterData } from 'models'

import Filter from 'pages/characters/Filter'
import CardSkeleton from 'components/card/CardSkeleton'
import CardWrapper from 'components/CardWrapper'
import Card from 'components/Card'
import TitleWrapper from 'components/TitleWrapper'
import Title from 'components/Title'
import Search from 'components/Search'

const CharacterList = () => {
	const filters = useReactiveVar(FiltersVar)

	const { data, loading, networkStatus } = useQuery<ICharacterData>(
		GET_CHARACTERS,
		{
			variables: {
				page: 1,
				filter: {
					name: filters.name,
					status: filters.status,
					gender: filters.gender,
					species: filters.species,
				},
			},
			notifyOnNetworkStatusChange: true,
		}
	)

	if (loading || networkStatus === NetworkStatus.refetch)
		return (
			<CardWrapper>
				{[...Array(8)].map((_, index) => (
					<CardSkeleton key={index} />
				))}
			</CardWrapper>
		)
	console.log('list characters')
	return (
		<CardWrapper>
			{data &&
				data.characters.results.map((character) => (
					<Card key={character.id} character={character} />
				))}
			{data && data.characters.results.length === 0 && (
				<h2>No characters found</h2>
			)}
		</CardWrapper>
	)
}

const Characters: FC = () => {
	console.log('characters')
	return (
		<>
			<TitleWrapper>
				<Title frontTitle='Characters' />
				<Search />
				<Filter />
			</TitleWrapper>
			<CharacterList />
		</>
	)
}

export default Characters
