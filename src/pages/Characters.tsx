import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from 'graphql/queries/characters'
import { ICharacterData } from 'models'
import Card from 'components/Card'
import styled from 'styled-components'

const Characters = () => {
	const { data, loading } = useQuery<ICharacterData>(GET_CHARACTERS, {
		variables: {
			page: 1,
		},
	})
	if (loading) return <p>getting characters...</p>

	return (
		<Wrapper>
			{data &&
				data.characters.results.map((character) => (
					<Card key={character.id} character={character} />
				))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 2rem;
`

export default Characters
