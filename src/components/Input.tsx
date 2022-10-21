import { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	ref:
		| ((instance: HTMLInputElement | null) => void)
		| React.RefObject<HTMLInputElement>
		| null
		| undefined
	props: any
}

const Input: FC<PropsType> = ({props}, ref) => {
	return <StyledInput {...props} ref={ref} />
}

const StyledInput = styled.input``

export default Input
