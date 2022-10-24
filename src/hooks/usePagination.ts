import { makeVar, useReactiveVar } from '@apollo/client'

const pageVar = makeVar(1)

const usePagination = () => {
	const page = useReactiveVar(pageVar)

	const setPage = (page: number) => {
		pageVar(page)
	}
	return { page, setPage }
}

export default usePagination
