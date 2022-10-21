import { FC, useId } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'

import { GET_EPISODES } from 'graphql/queries'
import { IEpisode } from 'models'

import Card from 'components/Card'
import CardWrapper from 'components/CardWrapper'
import Title from 'components/Title'
import TitleWrapper from 'components/TitleWrapper'

const Episode: FC = () => {
	const id = useId()
	const { data, loading } = useQuery<IEpisode>(GET_EPISODES, {
		variables: {
			filter: {
				name: 'Pilot',
			},
		},
	})

	if (loading) return <p>episodes loading...</p>

	return (
		<>
			{data && (
				<>
					{data.episodes.results.map((episode) => (
						<div key={id}>
							<TitleWrapper>
								<Title frontTitle='Episode name: ' title={episode.name} />
								<AirDate>Air date: {episode.air_date}</AirDate>
							</TitleWrapper>
							<CardWrapper key={episode.id}>
								{episode.characters.map((character, index) => (
									<Card key={index} character={character} />
								))}
							</CardWrapper>
						</div>
					))}
				</>
			)}
		</>
	)
}

const AirDate = styled.p`
	font-size: 1.25rem;
`

export default Episode
