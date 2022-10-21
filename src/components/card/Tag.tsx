import { CHARACTER_STATUS } from 'constant'
import { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	name: string
}

const renderStatus = (status: string) => {
	status = status.toUpperCase()
	switch (status) {
		case CHARACTER_STATUS.ALIVE:
			return 'green'
		case CHARACTER_STATUS.DEAD:
			return 'red'
		case CHARACTER_STATUS.UNKNOWN:
			return 'gray'
		default:
			return 'gray'
	}
}

const Tag: FC<PropsType> = ({ name }) => {
	const titleCase = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
	}

	return (
		<Wrapper status={renderStatus(name)}>
			<span>{titleCase(name)}</span>
		</Wrapper>
	)
}

const Wrapper = styled.div<{ status: string }>`
	position: absolute;
	padding: 0.5rem 0.75rem;
	background: ${(props) => props.status};
	border-radius: 5px;
	top: 0.5rem;
	right: 1rem;
	span {
		color: #fff;
		font-weight: bold;
	}
`

export default Tag
