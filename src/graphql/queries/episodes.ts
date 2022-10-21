import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
	query GetEpisodes($filter: FilterEpisode, $page: Int) {
		episodes(filter: $filter, page: $page) {
			results {
				id
				name
				episode
				air_date
				characters {
					image
					location {
						name
					}
					name
					status
				}
			}
		}
	}
`
