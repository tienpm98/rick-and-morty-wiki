import styled, { keyframes } from 'styled-components'

const CardSkeleton = () => {
	return (
		<StyledCardSkeleton>
			<PictureSkeleton />
			<ProductSkeleton height='24px' />
			<ProductSkeleton />
			<ProductSkeleton height='24px' />
		</StyledCardSkeleton>
	)
}

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const StyledCardSkeleton = styled.div`
	width: 320px;
	height: 440px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
`

const ProductSkeleton = styled.div<{
	height?: string
	width?: string
	marginTop?: string
}>`
	display: inline-block;
	height: ${(props) => props.height || '15px'};
	width: ${(props) => props.width || '80%'};
	animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
	background-color: #ccc;
	background-image: linear-gradient(90deg, #b1b1b1, #b5b5b5, #cbcbcb);
	background-size: 200px 100%;
	background-repeat: no-repeat;
	margin-bottom: 8px;
	margin-top: ${(props) => props.marginTop || '0'};
`

const PictureSkeleton = styled(ProductSkeleton)`
	margin-bottom: 20px;
	width: 100%;
	height: 300px;
	display: block;
`

export default CardSkeleton
