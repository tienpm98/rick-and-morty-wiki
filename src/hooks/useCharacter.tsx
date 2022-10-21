import client from 'config/client'
import { GET_CHARACTERS } from 'graphql/queries/characters'

const useCharacters = () => {
	const data = client.readQuery({
		query: GET_CHARACTERS,
	})

	return data
}

export default useCharacters
