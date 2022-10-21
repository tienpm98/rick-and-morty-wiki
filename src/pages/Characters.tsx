import { FC } from 'react'
import { NetworkStatus, useQuery, useReactiveVar } from '@apollo/client'

import { GET_CHARACTERS } from 'graphql/queries'
import { searchKeyVar } from 'graphql/variables'
import { ICharacterData } from 'models'

import CardWrapper from 'components/CardWrapper'
import Card from 'components/Card'
import TitleWrapper from 'components/TitleWrapper'
import Title from 'components/Title'
import Search from 'components/Search'
import CardSkeleton from 'components/CardSkeleton'

const CharacterList = () => {
	const searchKey = useReactiveVar(searchKeyVar)

	const { data, loading, networkStatus } = useQuery<ICharacterData>(
		GET_CHARACTERS,
		{
			variables: {
				page: 1,
				filter: {
					name: searchKey,
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
