import { ICharacter } from './ICharacter'

export interface IEpisode {
	episodes: {
		results: {
			id: string
			name: string
			air_date: string
			characters: ICharacter[]
		}[]
	}
}
