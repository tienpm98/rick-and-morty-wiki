import { makeVar } from '@apollo/client'

export const FiltersVar = makeVar({
	name: '',
	status: '',
	species: '',
	gender: '',
})
