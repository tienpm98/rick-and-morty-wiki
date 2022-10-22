import { makeVar } from '@apollo/client'

export const searchKeyVar = makeVar('')
export const FiltersVar = makeVar({
	name: '',
	status: '',
	species: '',
	gender: '',
})
