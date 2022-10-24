export interface ICharacter {
	id: string
	image: string
	location: { name: string }
	status: string
	name: string
}

export interface ICharacterData {
	characters: {
		info: {
			count: number
		}
		results: ICharacter[]
	}
}
