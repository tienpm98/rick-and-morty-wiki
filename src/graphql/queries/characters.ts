import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
	query GetCharacters($filter: FilterCharacter, $page: Int) {
		characters(filter: $filter, page: $page) {
			info {
				count
			}
			results {
				image
				location {
					name
				}
				status
				name
				id
			}
		}
	}
`
